import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8vh;
  font-family: "Bebas Neue";
  font-size: 8vh;
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50vw;
  margin-right: 2vw;
`;

const MenuItem = styled.div`
  margin-left: 2vw;
`;

const links = [
  { href: "/magic", text: "Magic" },
  { href: "/about", text: "About" }
];

const Header = ({ currentUrl }) => (
  <AppHeader>
    <Link prefetch key="/" href="/">
      <div>FullStory Challenge!</div>
    </Link>
    <HeaderLinks>
      {links.map(link => (
        <MenuItem>
          <Link prefetch key={link.href} href={link.href}>
            <div>{link.text}</div>
          </Link>
        </MenuItem>
      ))}
    </HeaderLinks>
  </AppHeader>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired
};

export default Header;
