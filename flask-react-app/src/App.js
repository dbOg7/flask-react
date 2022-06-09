import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[hello, setHello] = useState(0);

  useEffect(() => {
    fetch('/data').then(res => res.json()).then(data => {
      setHello(data.hello);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{hello}</p>

      </header>
    </div>

  );
}

export default App;
