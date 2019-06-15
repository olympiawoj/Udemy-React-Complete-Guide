import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    //only return this if there is an error
    if (this.state.hasError) {
      return <h1>Something went wrong :( sad </h1>;
    } else {
      //return whatever we wrap inside of ErrorBoundary
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
