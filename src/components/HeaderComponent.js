import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" expand="md" light>
          <div className="container">
            <NavbarBrand>
              <NavLink className="nav-link" to="/homr">
                <img
                  src="/assets/images/pchallenges-logo.png"
                  alt="product challenges logo"
                  width="100"
                />
              </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/challengenew">
                    Create Challenge
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="">
                    link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="">
                    link
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <span className="navbar-text ml-auto">
              <Button outline onClick={this.toggleModal}>
                Login
              </Button>
            </span>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>form login</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
