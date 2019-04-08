import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

var codeTutor = require('./codetutor.JPG');

class Cards extends Component {
    render() {
        return (
            <Container>

                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={codeTutor}/>
                    <Card.Body>
                        <Card.Title><b>codeTutor</b></Card.Title>
                        <Card.Text className="text-left">
                        <b>codeTutor</b> is a service that brings together both experienced web developers and aspiring web developers without ever having to leave the comfort of your home.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Card.Link href="https://github.com/csstanley/codeTutor">GitHub</Card.Link>
                        <Card.Link href="https://robertolive.github.io/codeTutor/">GitHub.io</Card.Link>
                    </Card.Body>
                </Card>


            </Container>
        )
    }
}

export default Cards;