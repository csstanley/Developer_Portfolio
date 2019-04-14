import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
// import the css file //
import Navigation from "../../comps/navbar/navigation.js";
import ContactForm from "../../comps/form/form.js";

class Contact extends Component {
    render() {
        return (
            <Container>
                <div><Navigation /></div>
                <div><ContactForm /></div>
            </Container>
        )
    }

}

export default Contact;