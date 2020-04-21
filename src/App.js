import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from "./views/Home";

function App() {

  return (
    <div style={{position:"relative",backgroundColor: "#24282c", width:"100%", height:"100%", minWidth:"100%", minHeight:"100%"}}>
      <Router>
        <Route path='/' exact component={Home} />
      </Router>
    </div>
    )
}

export default App;