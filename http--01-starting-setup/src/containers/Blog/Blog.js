import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";
import { Route, NavLink, Switch } from "react-router-dom";

// import Post from "../../components/Post/Post";
import "./Blog.css";

import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                  to="/posts"
                  exact
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Route path="/" exact render={() => <h1>Home</h1>} /><Route path="/" render={() => <h1>Home2</h1>} /> */}

        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
