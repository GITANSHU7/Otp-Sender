import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />



<br />
<Form />
        
      </div>
    );
  }
}

export default App;
