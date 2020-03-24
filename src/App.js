import React from 'react';
import './App.css';
import Hideable from './HideableText';
import AutoComplete from './AutoCompleteText';

function App() {
  return (
    <div className="App">
        <Hideable text="Dynamic Text!" />
        <AutoComplete />
    </div>
  );
}

export default App;
