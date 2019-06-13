import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    input: ""
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteChar = (event, charIndex) => {
    const input = [...this.state.input];
    console.log(input);
    input.splice(charIndex, 1);

    this.setState({ input: input.join("") });
  };

  render() {
    // const charList = this.state.input.split("").map(ch => {
    //   return <CharComponent character={ch} />;
    // });

    return (
      <div className="App">
        <input
          name="input"
          type="text"
          value={this.state.input}
          onChange={this.handleChanges}
        />
        <p>{this.state.input}</p>
        <p>{this.state.input.length}</p>
        <ValidationComponent input={this.state.input} />
        {/* {charList} */}
        <CharComponent input={this.state.input} deleteChar={this.deleteChar} />
        <hr />
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
