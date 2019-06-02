import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    // console.log("was clicked");
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "Does this work now?")
  // );
};

export default app;

// state = {
//   persons: [
//     { name: "Max", age: 28 },
//     { name: "Manu", age: 29 },
//     { name: "Stephanie", age: 26 }
//   ],
//   otherState: "some other value"
// };

// switchNameHandler = () => {
//   // console.log("was clicked");
//   this.setState({
//     persons: [
//       { name: "Maximilian", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 27 }
//     ]
//   });
// };
