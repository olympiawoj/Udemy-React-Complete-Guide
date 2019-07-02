import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  //this will run for EVERY re-render of Cockpit
  useEffect(() => {
    console.log("Cockpit.js useEffect running");
    //run HTTP close
    setTimeout(() => {
      alert("saved data to cloud!");
    }, 1000);
    return () => {
      console.log("Cockpit.js cleanup work in userEffect ");
    };
  }, []);

  useEffect(() => {
    console.log("Cockpit.js 2nd useEffect running");
    return () => {
      console.log("Cockpit.js 2nd cleanup work in userEffect ");
    };
  });

  //turns array of string into 1 string
  const assignedClasses = [];
  //set btnClass to empty - imp for adding red class and setting approp styling
  let btnClass = "";
  //classes.Red returns a string, valid CSS
  //we expect to get props defining whether we're showing persons and the persons
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes red
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //classes red +bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
