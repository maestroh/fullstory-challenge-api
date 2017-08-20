import React from 'react'
import PropTypes from 'prop-types';

import master from './master'

const Protected = Page => class ProtectedPage extends React.Component {
  static getInitialProps (ctx) {
    return Page.getInitialProps && Page.getInitialProps(ctx)
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }
  render () {
    if (!this.props.isAuthenticated) {
      return <div>Not Authorized</div>
    }
    return <Page {...this.props} />
  }
}

export default Page => master(Protected(Page))
