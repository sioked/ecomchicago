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
  Image,
  Button,
  Container,
} from 'bloomer';

import {compose, withState, withHandlers} from 'recompose';
import logo from '../Images/logo-no-text.png';

const Header = compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    toggleNav: ({setIsOpen}) => () => setIsOpen(n => !n),
  }),
)(({isOpen, toggleNav}) => (
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
          <NavbarItem>
            <a href="#first">First</a>
          </NavbarItem>
          <NavbarItem>
            <a href="#second">Second</a>
          </NavbarItem>
          <NavbarItem>
            <div>Third</div>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <Button href="#" isColor="primary">
              Register Now
            </Button>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  </Container>
));

export default Header;
