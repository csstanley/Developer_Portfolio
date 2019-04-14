import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';

import './cards.css';

const codeTutor = require('./codetutor.JPG');
const groceries = require('./groceries.JPG');

class Cards extends Component {
    render() {
        return (
            <CardDeck className="port">
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={codeTutor} className="image"/>
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

                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={groceries} className="image"/>
                    <Card.Body>
                        <Card.Title><b>Groceries to Gourmet</b></Card.Title>
                        <Card.Text className="text-left">
                        <b>Groceries to Gourmet</b> allows the customer to search through various recipes to choose meals that look interesting, then separates the ingredients for the customer and creates a grocery list.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Card.Link href="https://github.com/csstanley/GroceriesToGourmet">GitHub</Card.Link>
                        <Card.Link href="https://thawing-waters-93408.herokuapp.com/">Heroku</Card.Link>
                    </Card.Body>
                </Card>
                

</CardDeck>
        )
    }
}

export default Cards;