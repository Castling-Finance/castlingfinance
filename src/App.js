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
      window.open('https://docs.castling.finance', '_blank', 'noopener,noreferrer');
      }}>Docs</button>
      <button className="upper-button" onClick={(e) => {
      e.preventDefault();
      window.open('https://cal.com/yash-zanwar-9pqiaj', '_blank', 'noopener,noreferrer');
      }}>Get in touch</button>
    <button className="launch_app" onClick={(e) => {
      e.preventDefault();
      window.open('https://app.castling.finance', '_blank', 'noopener,noreferrer');
      }}>Launch App</button>
      </div>
    </div>
    <div className="AppLower">
    <text className='heading'>Castling Finance</text>
    <text className='subtitle'>Active Liquidity Management. Coming Soon.</text>
    </div>
    </div>
    </div>
  );
}

export default App;
