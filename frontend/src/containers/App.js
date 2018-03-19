import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/index';
import PostDetail from './PostDetail';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/:category/:pid" component={PostDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
