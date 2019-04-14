import React, { Component } from 'react';
import Navigation from "../../comps/navbar/navigation.js";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';


import './landing.css';


//Navigation is not importing//
class Landing extends Component {
    render() {
        return (
            <container className="landing">

                <div><Navigation /></div>

                
                <Jumbotron className="description">
                    <h1>Hello, my name is Christopher.</h1>
                    <p>I love writing, traveling and programmming, and
                    I have a passion for building intuitive and dynamic websites.</p>
                    
                    <p><Button variant="primary" className="learnmore" href="/port">Click Here to Learn More</Button></p>
                </Jumbotron>
                

            </container>
        )
    }
}

export default Landing;
