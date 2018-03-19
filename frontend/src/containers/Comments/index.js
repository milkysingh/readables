import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComments } from '../../actions';
import CommentList from '../../components/CommentList';

class Comment extends Component {
  componentDidMount() {
    this.props.getComments(this.props.pid);
  }
  render() {
    return (
      <div>
        <CommentList comments={this.props.comments} />
      </div>
    );
  }
}
Comment.propTypes = {
  comments: PropTypes.array,
  getComments: PropTypes.func.isRequired,
  pid: PropTypes.string,
};
Comment.defaultProps = {
  comments: [],
  pid: '',
};

const mapStateToProps = ({ comments: { comments } }) => ({
  comments,
});
const mapDispatchToProps = dispatch => ({
  getComments: pid => dispatch(getComments(pid)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
