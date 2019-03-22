import React, { Component } from 'react';
// import the css file //
import Navigation from "../../comps/navbar/navigation.js";
import Cards from "../../comps/cards/cards.js";

class Port extends Component {
    render() {
        return (
            <container>
            <row>
            <div><Navigation /></div>
            </row>
            <row>
            <div><Cards /></div>
            </row>
            </container>
        )
    }
    
}

export default Port;