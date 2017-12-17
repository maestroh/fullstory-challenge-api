import React from 'react'
import PropTypes from 'prop-types';
import master from '../hocs/master';

const Private = () => (
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
)

export default master(Private)
