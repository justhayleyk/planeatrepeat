import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Plan Eat Repeat</h1>
      <p>Body text</p>
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