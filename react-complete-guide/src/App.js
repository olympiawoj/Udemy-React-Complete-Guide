import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    //create new version of persons array
    const persons = [...this.state.persons];
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
    let persons = null;
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  changed={event => this.nameChangeHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      //classes.Red returns a string, valid CSS
      btnClass = classes.Red;
    }

    //turns array of string into 1 string
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes red
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes red +bold
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
