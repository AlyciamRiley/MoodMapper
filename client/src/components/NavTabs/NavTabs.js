import React from "react";
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
  DropdownItem
} from "reactstrap";

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
                <NavLink href="/survey/">
                  <h4>Create New</h4>
                </NavLink>
              </NavItem>

              {/* -----MoodHistory---- */}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <h4>Mood History</h4>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/Graph/">
                      <h4>View Graph</h4>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* -----FAQ----- */}
              <NavItem>
                <NavLink href="/Faq/">
                  <h4>FAQ</h4>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <h4>Profile</h4>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/Profile">
                        <h4>Profile</h4>
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">
                      <h4>Logout</h4>
                    </NavLink>
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
