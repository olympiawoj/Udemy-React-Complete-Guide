import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: "",
    error: false
  };

  componentDidMount() {
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
        this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            author={post.author}
            //holds method reference, id passed to Fullpost component
            clicked={() => this.postSelectedHandler(post.id)}
            key={post.id}
            title={post.title}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };
}

export default Blog;
