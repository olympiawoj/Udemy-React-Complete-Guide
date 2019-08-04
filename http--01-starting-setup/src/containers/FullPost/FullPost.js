import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: ""
  };

  componentDidMount() {
    //we only want to send this request if id is NOT Null i.e. its valid
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      //if we NO loaded posts OR if we do have one but ids are different
      if (
        !this.state.loadedPost ||
        this.state.loadedPost.id !== +this.props.match.params.id
      ) {
        axios
          .get("/posts/" + this.props.match.params.id)
          .then(res => {
            this.setState({
              loadedPost: res.data
            });
          })
          .catch();
      }
    }
  }

  deletePostHandler = () => {
    //also takes a URL, target a specific post w/ it.
    axios
      .delete("/posts/" + this.props.match.params.id)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    //initally returns false. if it returns true, output the post.

    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading!</p>;
    }
    //if iwe did this.props.id here, we get a valid prop BEFORE we get a loadedPost because fetching data is asynchronous
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
