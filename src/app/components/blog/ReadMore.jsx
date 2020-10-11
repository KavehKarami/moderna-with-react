import React from 'react';
import { Link } from 'react-router-dom';

const ReadMore = (props) => {
  return (
    <div className="read-more">
      <Link to={`/blog/${props.blogId}`}>Read More</Link>
    </div>
  );
}

export default ReadMore;