import React from "react";

//http://cheng.logdown.com/posts/2016/03/26/683329
//https://medium.com/@etherealm/super-vs-super-props-in-react-class-components-58658af6ecf2

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUserName: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.inputUserName}
        name="inputUserName"
        onChange={this.handleChanges}
      />
    );
  }
}

export default UserInput;
