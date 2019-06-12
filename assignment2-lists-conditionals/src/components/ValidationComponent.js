import React from "react";

const ValidationComponent = props => {
  let output = "";
  if (props.input.length > 5) {
    output = "Text too long";
  } else {
    output = "Text too short";
  }

  return <div>{output}</div>;
};

export default ValidationComponent;
