import React, { Component } from 'react';
import Categories from '../Categories';
import PostList from '../PostList';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Categories />

        <div>
          <PostList />
        </div>
      </div>
    );
  }
}
