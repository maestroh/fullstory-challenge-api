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
  font-size: 4vh;
  color: #4b3a71;
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

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "" : "";
const links = [
  { href: prefix + "spotify", text: "Spotify" },
  { href: prefix + "magic", text: "Magic" },
  { href: prefix + "about", text: "About" }
];
const home = prefix + "/";

const Header = ({ currentUrl }) => (
  <AppHeader>
    <Link prefetch key={home} href={home}>
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
  currentUrl: PropTypes.string.isRequired
};

export default Header;
