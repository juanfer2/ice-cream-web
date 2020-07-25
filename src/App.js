import React from 'react';
import logo from './logo.svg';
import loanding from './images/Loanding.gif';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import Home from './components/home/Home.jsx'

function App() {
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={loanding} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Primary Button</Button>
      </header>
    </div>
  );
}

export default App;
