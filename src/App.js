import React from 'react';
import './App.css';
import Hideable from './HideableText';
import AutoComplete from './AutoCompleteText';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <div className="App-Component">
          <Hideable text="Dynamic Text!" />
          <AutoComplete />
        </div>
      </div>
    </div>
  );
}

export default App;
