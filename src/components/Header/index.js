import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Container,
  NavbarLink,
  NavbarDropdown,
} from 'bloomer';

import { compose, withState, withHandlers } from 'recompose';
import RegistrationButton from '../Buttons/Registration.js';
import logo from '../Images/logo-no-text.png';

const Header = compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    toggleNav: ({ setIsOpen }) => () => setIsOpen(n => !n),
  }),
)(({ isOpen, toggleNav }) => {
  const data = useStaticQuery(
    graphql`
      query {
        datoCmsIndexPage {
          facebookLink
          sponsorPackageFile {
            url
          }
        }
      }
    `,
  );
  return (
    <Container>
      <Navbar style={{}}>
        <NavbarBrand className="navbar-brand">
          <NavbarItem>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  maxHeight: '3rem',
                }}
              />
            </Link>
          </NavbarItem>
          <NavbarBurger isActive={isOpen} onClick={toggleNav} />
        </NavbarBrand>
        <NavbarMenu isActive={isOpen} onClick={toggleNav}>
          <NavbarStart>
            <NavbarItem href="/#about" isTab>
              About
            </NavbarItem>
            <NavbarItem href="/#speakers" isTab>
              Speakers
            </NavbarItem>
            <NavbarItem href="/#sponsors" isTab hasDropdown isHoverable>
              <NavbarLink>Sponsors</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href={data.datoCmsIndexPage.sponsorPackageFile.url}>
                  Become a Sponsor
                </NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
            <NavbarItem href="/travel" isTab>
              Travel
            </NavbarItem>
            <NavbarItem href="/contact" isTab>
              Contact Us
            </NavbarItem>
            <NavbarItem href={data.datoCmsIndexPage.facebookLink}>
              Find us on Facebook
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <RegistrationButton />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </Container>
  );
});

export default Header;
