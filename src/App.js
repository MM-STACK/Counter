import React from 'react';
import './App.css'
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter Equipment="Clicker" />
        <HoverCounter Equipment="Drone"/>
      </header>
    </div>
  );
}

export default App;
