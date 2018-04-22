import React from 'react';
import "./Navbar.css";
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
        <Navbar color="light" light expand="sm">
          <NavbarBrand href="/">Mood|Mapper</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

           
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>


              {/* -----Create new----- */}
            <NavItem>
                <NavLink href="/survey/">Create New</NavLink>
              </NavItem>

               {/* -----MoodHistory---- */}


                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Mood History
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                     View Graph
                  </DropdownItem>
                  <DropdownItem>
                    Edit Previous Entry
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              </UncontrolledDropdown>

               {/* -----FAQ----- */}
              <NavItem>
                <NavLink href="/faq/">FAQ</NavLink>
              </NavItem>
              

               {/* -----Profile----- */}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Your Profile
                  </DropdownItem>
                  <DropdownItem>
                    Logout
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