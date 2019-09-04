import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              //key goes on Link, not article, b/c its the top most element in this loop
              //take adv of match in URL and concatenate /course so it always takes the page I'm currently on
              //Dynamic solution
              <Link
                key={course.id}
                to={{
                  pathname: this.props.match.url + "/" + course.id,
                  search: "?title=" + course.title
                }}
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
        </section>
        <Route
          path={this.props.match.url + "/:courseId"}
          component={Course}
        ></Route>
      </div>
    );
  }
}

export default Courses;