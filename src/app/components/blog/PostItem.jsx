import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  return (
    <div className="post-item clearfix">
      <img src={props.imgURL} alt="" />
      <h4><Link to="/blog/1">{props.title}</Link></h4>
      {props.time}
    </div>
  );
}

export default PostItem;