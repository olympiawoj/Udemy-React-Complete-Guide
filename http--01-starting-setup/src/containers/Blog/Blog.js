import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

// import Post from "../../components/Post/Post";
import "./Blog.css";

//informs webpack about dependency and it includes it in the global bundle. for lazy loading, this is the exact oppy of what we want to do
import Posts from "../Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
//import NewPost from "../NewPost/NewPost";

//asyncComponent requires an arg, this arg should be an anon arrow function
//dynamic import syntax- w/e comes between parenthesis is only imported when the function is executed
//function is only executed once we render AsyncNewPost to the screen.
const AsyncNewPost = asyncComponent(() => {
  return import("../NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
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
          {this.state.auth ? (
            //changed this to AsyncNewPost - eventually this will be a component b/c AsyncComponent returns a component - we have an HOC - it returns a class w/ a render method
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
