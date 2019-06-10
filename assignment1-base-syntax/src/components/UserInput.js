import React from "react"; //required bc JSX code you return in the end is turned into React.CreateElement

//http://cheng.logdown.com/posts/2016/03/26/683329
//https://medium.com/@etherealm/super-vs-super-props-in-react-class-components-58658af6ecf2

const UserInput = props => {
  //inline styles equal to an object
  const style = {
    border: "2px solid red"
  };

  return (
    <div>
      <input
        style={style}
        type="text"
        value={props.inputUserName}
        name="username"
        onChange={props.handleChanges}
      />
      <button onClick={props.click}>Submit Name</button>
    </div>
  );
};

export default UserInput;
