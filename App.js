import React from 'react'
import './App.css';
import Content from './components/Content/content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  const isAuthenticated = useTwitchAuthentication();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Content></Content>
      </div>
    </Router>
  );
}

export default App;
