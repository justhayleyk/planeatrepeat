import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlanEatRepeatv2 from './PlanEatRepeatv2.svg';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Plan Eat Repeat</h1>
      <img src={PlanEatRepeatv2} className="App-logo" alt="logo" />
      <p>Ready to Plan out your meals for success?</p>
      {/* Link to List.js */}
      <Link to={'./mealplan'}>
        <button variant="raised">
            My Meal Planning Days
        </button>
      </Link>
      <Link to={'./mealplanningform'}>
        <button variant="raised">
           form
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;