import React from 'react';
import Link from 'gatsby-link';
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
)(({ isOpen, toggleNav }) => (
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
          <NavbarItem isTab>
            <a href="#about">About</a>
          </NavbarItem>
          <NavbarItem isTab>
            <a href="#speakers">Speakers</a>
          </NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink>Previous Events</NavbarLink>
            <NavbarDropdown>
              <NavbarItem href="http://2017.ecomchicago.com">ecomChicago 2017</NavbarItem>
              <NavbarItem href="http://2016.ecomchicago.com">ecomChicago 2016</NavbarItem>
            </NavbarDropdown>
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
));

export default Header;
