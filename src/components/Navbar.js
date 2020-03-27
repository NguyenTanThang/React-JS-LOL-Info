import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import {Link} from "react-router-dom";

const Navigator = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  /*
  const onChangeRegion = () => {
    const region = localStorage.getItem("region") === "vn_VN" ? "en_US" : "vn_VN";

    localStorage.setItem("region", region);
    window.location.reload();
  }
  */

  return (
    <div>
      <Navbar color="faded" className="navbar" light>
        <Container>
        <NavbarBrand href="/" className="mr-auto">
          <b>LOL Info</b>
        </NavbarBrand>
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
                <Link to="/tft/champions">TFT Champions</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tft/items">TFT Items</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/tft/traits">TFT Traits</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/NguyenTanThang/React-JS-LOL-Info">
                GitHub
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