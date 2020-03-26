import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import {Link} from "react-router-dom";

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
              <NavLink>
                <Link to="/">Champions</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/items">Items</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="https://github.com/NguyenTanThang/React-JS-LOL-Info">GitHub</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigator;