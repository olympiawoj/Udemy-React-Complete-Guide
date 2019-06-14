import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1231", name: "Max", age: 28 },
      { id: "2321", name: "Manu", age: 29 },
      { id: "665", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //create new version of persons array
    //removes 1 element from array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    //1) Find the Person into which input field we typed, I get person as an input, then I get function body. I return true or false depending on whether this was the element/Person I was looking for
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //2) Get the Person itself by reaching out to this.state.persons and accessing the Person
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    //3) Update the Person’s name
    person.name = event.target.value;

    //4) Update the array at position I've fetched - first get persons array with spread operator, then update it at one position
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //5) Set state equal to this updated persons array, which is a copy of the old array where we updated 1 element with the updated person where we adjusted the name
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    //defining inline styles
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
