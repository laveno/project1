import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from "./views/Home";

function App() {

  return (
    <div style={{backgroundColor: "#24282c", width:'100%'}}>
      <Router>
        <Route path='/' exact component={Home} />
      </Router>
    </div>
    )
}

export default App;