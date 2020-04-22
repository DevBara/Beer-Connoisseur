import React from 'react'
import './App.css';
import BeerLocator from './components/BeerLocator'
import Home from './components/Home'
import NavBar from './components/NavBar'
import HowTo from './components/HowTo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeerLocator />
        <Home />
        <NavBar />
        <HowTo />
        
      </header>
    </div>
  );
}

export default App;
