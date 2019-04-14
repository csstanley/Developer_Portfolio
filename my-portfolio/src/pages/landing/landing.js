import React, { Component } from 'react';
import Navigation from "../../comps/navbar/navigation.js";
import Row from "react-bootstrap/Row";


import './landing.css';

//Navigation is not importing//
class Landing extends Component {
    render() {
        return (
            <container>

            <div><Navigation /></div>
            <Row className="description1">This is where the description goes.</Row>
            <Row className="description2">This is where the description goes.</Row>
            <Row className="description3">This is where the description goes.</Row>
            <Row className="description4">This is where the description goes.</Row>

            </container>
        )
    }
}

export default Landing;
