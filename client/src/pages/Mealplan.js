import React, { Component } from 'react';

class Mealplan extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      mealplan: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getMealPlan();
  }

  // Retrieves the list of items from the Express app
  getMealPlan = () => {
    fetch('/api/mealplan')
    .then(res => res.json())
    .then(mealplan => this.setState({ mealplan }))
  }

  render() {
    const { mealplan } = this.state;

    return (
      <div className="App">
        <h1>Days I meal planned</h1>
        {/* Check to see if any items are found*/}
        {mealplan.length ? (
          <div>
            {/* Render the list of items */}
            {mealplan.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Mealplan;