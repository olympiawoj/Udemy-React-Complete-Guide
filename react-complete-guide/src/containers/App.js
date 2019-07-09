import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor running");
  }
  state = {
    persons: [
      { id: "1231", name: "Max", age: 28 },
      { id: "2321", name: "Manu", age: 29 },
      { id: "665", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps running", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount running ");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate running");
  }

  //must return either true or false, true allows update
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

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
    console.log("[App.js] render running");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangeHandler}
          click={this.deletePersonHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}

        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
