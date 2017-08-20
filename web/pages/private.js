import React from 'react'
import PropTypes from 'prop-types';
import Protected from '../hocs/protected'

const Private = () => (
  <div>
    Hi! This is a super secure page!
  </div>
)

export default Protected(Private)
