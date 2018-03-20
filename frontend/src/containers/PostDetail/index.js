import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostDetail, setPostVotes } from '../../actions';
import constant from '../../constant';
import classes from './PostDetail.css';
import Comments from '../Comments';

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.pid);
  }

  scoreHandler = (option) => {
    this.props.setVote(this.props.match.params.pid, option);
  };

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
                <button
                  onClick={() => this.scoreHandler(constant.UP_VOTE)}
                  className={classes.voteButton}
                >
                  <i className="fas fa-thumbs-up" />
                </button>
                <button
                  onClick={() => this.scoreHandler(constant.DOWN_VOTE)}
                  className={classes.voteButton}
                >
                  <i className="fas fa-thumbs-down" />
                </button>
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
  getPostDetail: PropTypes.func.isRequired,
  setVote: PropTypes.func.isRequired,
};
PostDetail.defaultProps = {
  selectedPost: null,
  // getPostDetail: null,
};
const mapDispatchToProps = dispatch => ({
  getPostDetail: pid => dispatch(getPostDetail(pid)),
  setVote: (pid, option) => dispatch(setPostVotes(pid, option)),
});
const mapStateToProps = ({ posts: { selectedPost } }) => ({
  selectedPost,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
