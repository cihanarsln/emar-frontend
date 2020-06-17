import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";

import "../../styles/admin/NavigationBar.css";

const NavigationBar = () => {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <Link id="admin-navbar-brand" to="/">
                        Emar
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className="link" to="/company/reservation">
                                <i className="fas fa-border-all" id="admin-navbar-icon"></i>
                                Rezervations
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="link" to="/company">
                                <i className="far fa-clone" id="admin-navbar-icon"></i>
                                Companies
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;