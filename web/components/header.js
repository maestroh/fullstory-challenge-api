import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link'

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/secret', text: 'Top Secret', authRequired: true },
  { href: '/auth/login', text: 'Sign In', anonymousOnly: true },
  { href: '/auth/logout', text: 'Sign Off', authRequired: true }
]

const getAllowedLinks = isAuthenticated => links
  .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
  .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly))

const Header = ({ isAuthenticated, currentUrl }) => 
  <div>
    {getAllowedLinks(isAuthenticated).map(link => (
      <Link prefetch key={link.href} href={link.href}>
        <div>
          {link.text}
        </div>
      </Link>
    ))}
  </div>



Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired
}

export default Header;