import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old
        <p>{props.children}</p>
      </p>
    <div/>
  );
};

export default person;
