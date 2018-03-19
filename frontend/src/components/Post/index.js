import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Post.css';
import { titleCheck } from '../../utils/util';

const post = ({ postItem }) => (
  <div className={classes.postCard}>
    <div className="card border-dark " style={{ width: '400px' }}>
      <div className={`card-header  border-dark ${classes.header}`}>
        <b> {`${postItem.category}`}</b>
        <div className={classes.postControls}>
          <i className="far fa-edit" style={{ marginRight: '20px' }} />
          <i className="fas fa-trash" />
        </div>
      </div>
      <Link
        to={`/posts/${postItem.category}/${postItem.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className="card-body text-dark">
          <h5 className="card-title">
            <b>{titleCheck(postItem.title)}</b>
          </h5>
          <div className={`card-text ${classes.scoreDisplay}`}>
            <h5>{`-by ${postItem.author}`}</h5>
            <i className="fas fa-comments">{postItem.commentCount}</i>
            <i className="fas fa-heart">{postItem.voteScore}</i>
          </div>
        </div>
      </Link>
      <div className={`card-footer border-dark ${classes.scoreControl}`}>
        <i className="fas fa-thumbs-up" />
        <i className="fas fa-thumbs-down" />
      </div>
    </div>
  </div>
);
export default post;
post.propTypes = {
  postItem: PropTypes.object.isRequired,
};
