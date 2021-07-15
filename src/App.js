import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import FoodList from './components/FoodList'

function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <FoodList />

    </div>
  );
}

export default App;
