import React from 'react';
import BlogCommentContainer from './BlogCommentContainer';
import ReplyForm from './ReplyForm';

const BlogComment = () => {
  return (
    <div className="blog-comments">
      <BlogCommentContainer />
      <ReplyForm />
    </div>
  );
}

export default BlogComment;