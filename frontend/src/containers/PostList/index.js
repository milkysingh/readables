import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions';

import Post from '../../components/Post';
import classes from './PostList.css';

class PostList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    const renderList = this.props.allPosts.map(post => (
      <li key={post.id} className={classes.postListItem}>
        <Post postItem={post} />
      </li>
    ));
    return (
      <div>
        <ul className={classes.postList}>{renderList}</ul>
      </div>
    );
  }
}

PostList.propTypes = {
  allPosts: PropTypes.array,
  getAllPosts: PropTypes.func.isRequired,
};
PostList.defaultProps = {
  allPosts: [],
};

const mapstateToProps = ({ posts: { allPosts } }) => ({ allPosts });

export default connect(mapstateToProps, { getAllPosts })(PostList);
