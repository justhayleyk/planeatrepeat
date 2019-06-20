import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Mealplan from './pages/Mealplan';
import MealPlanningForm from './pages/MealPlanningForm';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/mealplan' component={Mealplan}/>
          <Route path='/mealplanningform' component={MealPlanningForm}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;