import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import "./Posts.css";

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
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            author={post.author}
            //holds method reference, id passed to Fullpost component
            clicked={() => this.postSelectedHandler(post.id)}
            //passing props down from Posts to Post component
            // {...this.props}
            // match={this.props.match}
            key={post.id}
            title={post.title}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
