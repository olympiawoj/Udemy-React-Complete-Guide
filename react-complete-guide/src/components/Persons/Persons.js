import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps running");
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    //have to return true or false, nothing not an option - return true if React should cont updating, false if it shouldn't
    console.log("[Persons.js] shouldComponentUpdate running");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate running");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate....");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount....");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          age={person.age}
          click={() => this.props.click(index)}
          name={person.name}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
