import React from 'react';
import ListTechniques from './components/ListTechniques';
import ListMouvements from './components/ListMouvements';
import './App.css';

function App() {
  return (
    <div className="App">
      <ListTechniques />
      <ListMouvements />
    </div>
  );
}

export default App;
