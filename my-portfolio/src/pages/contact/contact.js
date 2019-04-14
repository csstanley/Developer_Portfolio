import React, { Component } from 'react';
import Navigation from "../../comps/navbar/navigation.js";
import ContactForm from "../../comps/form/form.js";

import './contact.css';

class Contact extends Component {
    render() {
        return (
            <container>
                <row><Navigation /></row>
                <row><ContactForm /></row>
            </container>
        )
    }

}

export default Contact;