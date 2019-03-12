import React, { Component } from 'react';
// import the css file //
import Navigation from "./comps/navbar/Navigation";


//Navigation is not importing//
class Landing extends Component {
    render() {
        return (
            <div><Navigation /></div>
        )
    }
}

export default Landing;
