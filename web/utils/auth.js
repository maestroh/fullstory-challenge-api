import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const _getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

const _checkSecret = (secret) => Cookie.get('secret') === secret

const _extractInfoFromHash = () => {
  if (!process.browser) {
    return undefined
  }
  const { id_token, state } = _getQueryParams()
  return { token: id_token, secret: state }
}

const _setToken = (token) => {
  if (!process.browser) {
    return
  }
  Cookie.set('user', jwtDecode(token))
  Cookie.set('jwt', token)
}

export const handleAuth = () => {
  const { token, secret } = _extractInfoFromHash()
  if (!_checkSecret(secret) || !token) {
    console.error('Something happened with the Sign In request')
  }
  _setToken(token)
}

export const unsetToken = () => {
  if (!process.browser) {
    return
  }
  Cookie.remove('jwt')
  Cookie.remove('user')
  Cookie.remove('secret')

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
}

export const getUserFromServerCookie = (req) => {
  if (!req.headers.cookie) {
    return undefined
  }
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined
  }
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}

export const getUserFromLocalCookie = () => {
  return Cookie.getJSON('user')
}

export const setSecret = (secret) => Cookie.set('secret', secret)

