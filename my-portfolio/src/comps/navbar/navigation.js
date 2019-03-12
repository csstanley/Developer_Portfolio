import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light">
                {/* <Nav
                    activeKey="/"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                > */}
                <Nav>
                    <Row>
                    <Col><Button variant="outline-secondary"><Nav.Link variant="pills" href="/">Home</Nav.Link></Button></Col>
                    <Col><Button variant="outline-secondary"><Nav.Link variant="pills" href="/port" eventKey="link-1">Portfolio</Nav.Link></Button></Col>
                    <Col><Button variant="outline-secondary"><Nav.Link variant="pills" href="/blog" eventKey="link-2">Blog</Nav.Link></Button></Col>
                    <Col><Button variant="outline-secondary"><Nav.Link variant="pills" href="/contact" eventKey="link-3">Contact</Nav.Link></Button></Col>
                    </Row>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;


