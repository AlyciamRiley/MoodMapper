import React from "react";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";
import Faq from "../Pages/Faq";
import Graph from "../Pages/Graph";
import Profile from "../Pages/Profile";
import Survey from "../Pages/Survey";

import "./NavTabs.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  render() {
    return (
      <div className="strap-nav">
        <Navbar color="white" light expand="sm">
          
          <NavbarBrand href="/">
            <img src="/logo.PNG" alt="logo" className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
     
              {/* -----Create new----- */}
            <NavItem>
                <NavLink href="/survey/"><h2>Create New</h2></NavLink>
              </NavItem>

               {/* -----MoodHistory---- */}

                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <h2>Mood History</h2>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                  <NavLink href="/Graph/"><h2>View Graph</h2></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

               {/* -----FAQ----- */}
              <NavItem>
                <NavLink href="/Faq/"><h2>FAQ</h2></NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <h2>Profile</h2>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                  <NavItem>
                <NavLink href="/Profile"><h2>Profile</h2></NavLink>
              </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                   <NavLink href="#"><h2>Logout</h2></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
