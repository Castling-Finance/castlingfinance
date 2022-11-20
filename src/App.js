import logo from './svg-logo.svg';
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
    <text className='subtitle'>Actively Managed Stablecoin Liquidity.</text>
    <button className="contact-button" onClick={(e) => {
      e.preventDefault();
      window.open('mailto:yash@castling.finance', '_blank', 'noopener,noreferrer');
      }}>Contact Us</button>
    </div>
    </div>
    </div>
  );
}

export default App;
