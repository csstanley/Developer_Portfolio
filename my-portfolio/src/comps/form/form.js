import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './form.css';

import React, { Component } from 'react';


class ContactForm extends Component {
    render() {
        return (
            <Form className="contact">

                <div className="contactTitle">Contact Me</div>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="First and Last Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="E-mail Address" />
                </Form.Group>


                <Form.Group controlId="formMessageArea">
                    <Form.Control as="textarea" rows="10" placeholder="Enter a Message"/>
                </Form.Group>
                
                <Button position="left" variant="dark" type="submit" className="submitbtn" font-family="verdana" font-size="14px">
                    Click to Send Message
                </Button>
            </Form>
        )
    }
}

export default ContactForm;