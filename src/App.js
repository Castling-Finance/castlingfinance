import logo from './logo1.png';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='AppWithin'>
    <div className="AppUpper">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='AppBar'>
      <button className="upper-button" onClick={(e) => {
      e.preventDefault();
      window.open('https://castling-finance.gitbook.io/docs/', '_blank', 'noopener,noreferrer');
      }}>Docs</button>
      <button className="upper-button" onClick={(e) => {
      e.preventDefault();
      window.open('https://twitter.com/Castling_Fin', '_blank', 'noopener,noreferrer');
      }}>Community</button>
      </div>
    </div>
    <div className="AppLower">
    <text className='heading'>Castling Finance</text>
    <text className='subtitle'>Cutting edge financial innovation. Coming soon.</text>
    <button className="contact-button">Contact Us</button>
    </div>
    </div>
    </div>
  );
}

export default App;
