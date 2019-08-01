import React, { Component } from "react";
import axios from "../../axios";
import { Route } from "react-router-dom";

import Post from "../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    //console.logging our props- the props object & history, location, & match
    console.log(this.props);
    axios
      .get("/posts")
      .then(res => {
        const posts = res.data.slice(0, 4);
        //transforming data to add author field
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    //same as Link to using object notation
    // this.props.history.push({ pathname: "/" + id });
    //passing a string- same way of doing
    this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            author={post.author}
            //holds method reference, id passed to Fullpost component
            clicked={() => this.postSelectedHandler(post.id)}
            //passing props down from Posts to Post component
            // {...this.props}
            // match={this.props.match}
            key={post.id}
            title={post.title}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
