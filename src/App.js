import React, { useEffect } from "react";
import Home from "./containers/Home";
import ViewPost from "./containers/ViewPost";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";

import CreatePost from "./containers/CreatePost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-post">
            <CreatePost />
          </Route>
          <Route exact path="/view-post">
            <ViewPost />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
