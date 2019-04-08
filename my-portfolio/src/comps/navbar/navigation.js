import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import React, { Component } from 'react';
import './navigation.css';

var Github = require('./github.png');
var Linkedin = require('./linkedin.png');



class Navigation extends Component {
    render() {
        return (
            <Navbar className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/"><Button variant="secondary"><Badge>Home</Badge></Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/port" eventKey="link-1"><Button variant="secondary"><Badge>Portfolio</Badge></Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/blog" eventKey="link-2"><Button variant="secondary"><Badge>Blog</Badge></Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact" eventKey="link-3"><Button variant="secondary"><Badge>Contact</Badge></Button></Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/csstanley"><Image src={Github} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/christophersstanley/"> <Image src={Linkedin} /></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;


