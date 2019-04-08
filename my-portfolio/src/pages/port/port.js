import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
// import the css file //
import Navigation from "../../comps/navbar/navigation.js";
import Cards from "../../comps/cards/cards.js";


class Port extends Component {
    render() {
        return (
            <container>
            <div>
            <Navigation />
            </div>
            <div>
            <Cards />
            </div>
            </container>
        )
    }
    
}

export default Port;