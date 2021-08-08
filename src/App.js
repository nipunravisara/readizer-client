import React from "react";
import Home from "./containers/Home";
import ViewPost from "./containers/ViewPost";

import CreatePost from "./containers/CreatePost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-post">
            <CreatePost />
          </Route>
          <Route exact path="/post/:postId">
            <ViewPost />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
