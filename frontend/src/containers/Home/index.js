import React, { Component } from 'react';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import PostList from '../../components/PostList';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Categories />

        <div>
          <PostList />
        </div>
      </div>
    );
  }
}
