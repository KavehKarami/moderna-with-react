import React from 'react';

const BlogCommentItem = (props) => {
  return (
    <div id={props.id} className={props.isReply ? "comment comment-reply clearfix" : "comment clearfix"}>
      <img src={props.imgURL} className="comment-img  float-left" alt="" />
      <h5><a href="/blog/#">{props.by}r</a> <a href="/blog/#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
      {props.time}
      <p>
        {props.comment}
      </p>
      {props.children}
    </div>
  );
}

export default BlogCommentItem;