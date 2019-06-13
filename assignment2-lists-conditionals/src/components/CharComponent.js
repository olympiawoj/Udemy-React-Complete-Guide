import React from "react";

const CharComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  // let input = null;
  // if (props.input.length > 0) {
  //   let inputArr = props.input.split();
  //   console.log(inputArr);
  //   input = inputArr.map(char => {
  //     return <p>{char}</p>;
  //   });
  // }

  return <div style={style}>{props.character}</div>;
};

export default CharComponent;
