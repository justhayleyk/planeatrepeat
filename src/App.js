import React from 'react';
import PlanEatRepeatv2 from './PlanEatRepeatv2.svg';
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={PlanEatRepeatv2} className="App-logo" alt="logo" />
        <p>
          Ready to Plan out your meals for success?
        </p>
        <Button color="secondary">Enter</Button>
      </header>
    </div>
  );
}

export default App;
