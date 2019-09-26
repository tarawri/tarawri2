import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import Nav from "./components/Nav/Nav"
import Index from "./components/Index/index"
import Contact from "./components/Contact/Contact"



import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       
        <BrowserRouter>
        <Nav />
        <Route exact path = "/" component = {Index}/>
        <Route path = "/contact" component = {Contact}/>
        </BrowserRouter>
        
      
      </div>
    );
  }
}

export default App;
