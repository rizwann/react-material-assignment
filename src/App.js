import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/not-found/NotFound';
import PostDetails from './components/post-details/PostDetails';
import PostList from './components/post-list/PostList';

function App() {
  
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/posts">
            <PostList></PostList>
          </Route>
          <Route exact path="/">
            <PostList></PostList>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
