import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostDetail } from '../../actions';
import classes from './PostDetail.css';
import Comments from '../Comments';

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.pid);
  }
  render() {
    const { selectedPost } = this.props;
    return (
      <div className="container">
        {this.props.selectedPost ? (
          <div>
            <div className={classes.main}>
              <h2 className={classes.title}>{selectedPost.title}</h2>

              <div className={classes.author}>
                <cite>{`- by ${selectedPost.author}`}</cite>
                <div className={classes.scores}>
                  <i className="fas fa-comments">{selectedPost.commentCount}</i>
                  <i className="fas fa-heart">{selectedPost.voteScore}</i>
                </div>
              </div>

              <p className={classes.postBody}>{selectedPost.body}</p>
              <div className={classes.scoreControl}>
                <i className="fas fa-thumbs-up" />
                <i className="fas fa-thumbs-down" />
              </div>
            </div>
            <h3 className={classes.commentHead}>Comments</h3>
            <Comments pid={selectedPost.id} />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

PostDetail.propTypes = {
  selectedPost: PropTypes.object,
  getPostDetail: PropTypes.func,
};
PostDetail.defaultProps = {
  selectedPost: null,
  getPostDetail: null,
};
const mapDispatchToProps = dispatch => ({
  getPostDetail: pid => dispatch(getPostDetail(pid)),
});
const mapStateToProps = ({ posts: { selectedPost } }) => ({
  selectedPost,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
