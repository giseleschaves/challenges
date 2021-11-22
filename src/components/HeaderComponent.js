import React, {Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)

        this.toggleNav = this.toggleNav.bind(this)
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="light" expand="md" light>
                    <div className="container">
                        <NavbarBrand href="/">
                            <img src="/assets/images/pchallenges-logo.png" alt="product challenges logo" width="100"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="">link</NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink  className="nav-link" to="">link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="">link</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    
    }
}

export default Header
