import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: ""
  };

  //CDM is not re-executed b/c this component isnt unmounted and mounted, the id/props change, but also  to update state we also have to execute
  //this code in ComponentDidUpdate
  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    //object name, to this pass search query string
    //location and search object
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    //allows us to create an iterator based on it, an array, something we can loop through
    //use query, call entires on it, a method availble on the URL search params element.
    //there we can now loop throough it
    //we get an array, and we're interested in 2nd element
    for (let param of query.entries()) {
      console.log(param);
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] });
      }
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
