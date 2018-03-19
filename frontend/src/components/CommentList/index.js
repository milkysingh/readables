import React from 'react';
import PropTypes from 'prop-types';

const commentList = ({ comments }) => {
  console.log(comments);
  const renderCommentList = comments.map(comment => (
    <li className="list-group-item" key={comment.id}>
      {`"${comment.body}" - `}
      <cite>
        <b>{comment.author}</b>
      </cite>
    </li>
  ));
  return (
    <div>
      <ul className="list-group list-group-flush">{renderCommentList}</ul>
    </div>
  );
};
export default commentList;

commentList.propTypes = {
  comments: PropTypes.array.isRequired,
};
