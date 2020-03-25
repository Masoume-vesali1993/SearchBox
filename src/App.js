import React from 'react';
import './App.css';
import Hideable from './HideableText';
import AutoComplete from './AutoCompleteText';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <div className="App-Component">
          <Hideable text="Dynamic Text!" />
          <AutoComplete items={countries}/>
          <br/><br />
          <AutoComplete items={['Adam', 'Peter', 'Sara']}/>
        </div>
      </div>
    </div>
  );
}

export default App;
