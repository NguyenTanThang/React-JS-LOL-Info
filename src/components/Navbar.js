import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

const Navigator = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" className="navbar" light>
        <Container>
        <NavbarBrand href="/" className="mr-auto">LOL Info</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Champions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/items">Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigator;