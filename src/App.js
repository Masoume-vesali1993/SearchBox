import React from 'react';
import './App.css';
import Hideable from './HideableText';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Hideable text="Dynamic Text!" />
      </div>
    </div>
  );
}

export default App;
