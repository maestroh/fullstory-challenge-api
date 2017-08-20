import React from 'react'
import PropTypes from 'prop-types';
import Router from 'next/router'

import { handleAuth } from '../../utils/auth'

export default class Index extends React.Component {
  static propTypes = {
    url: PropTypes.object.isRequired
  }

  componentDidMount() {
    handleAuth();
    Router.push('/')
  }
  render() {
    return null
  }
}
