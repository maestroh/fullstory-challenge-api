import React from 'react'
import { show } from '../../utils/lock'
const CONTAINER_ID = 'lock'

class Login extends React.Component {
  componentDidMount () {
    show(CONTAINER_ID)
  }
  render () {
    return <div id={CONTAINER_ID} />
  }
}

export default Login