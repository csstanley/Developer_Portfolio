import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Blog  from "./pages/blog/blog.js";
import Landing from "./pages/landing/landing.js";
import Contact from "./pages/contact/contact.js";
import Port from "./pages/port/port.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
      <div>
        <Route exact path="/" component={Landing}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/port" component={Port}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
