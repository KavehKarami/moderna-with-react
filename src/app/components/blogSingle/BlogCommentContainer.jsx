import React from 'react';
import BlogCommentItem from './BlogCommentItem';

const BlogCommentContainer = () => {
  return (
    <React.Fragment>
      <h4 className="comments-count">8 Comments</h4>
      <BlogCommentItem id="comment-1" imgURL={require("../../../assets/img/comments-1.jpg")} by="Georgia Reader" time={<time dateTime="2020-01-01">01 Jan, 2020</time>} comment="Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et." />

      <BlogCommentItem id="comment-2" imgURL={require("../../../assets/img/comments-2.jpg")} by="Aron Alvarado" time={<time dateTime="2020-01-01">01 Jan, 2020</time>} comment="Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et." >
        <BlogCommentItem isReply={true} id="comment-reply-1" imgURL={require("../../../assets/img/comments-3.jpg")} by="Lynda Small" time={<time dateTime="2020-01-01">01 Jan, 2020</time>} comment="Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et." >
          <BlogCommentItem isReply={true} id="comment-reply-2" imgURL={require("../../../assets/img/comments-4.jpg")} by="Sianna Ramsay" time={<time dateTime="2020-01-01">01 Jan, 2020</time>} comment="Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et." />
        </BlogCommentItem>
      </BlogCommentItem>

      <BlogCommentItem id="comment-3" imgURL={require("../../../assets/img/comments-5.jpg")} by="Nolan Davidson" time={<time dateTime="2020-01-01">01 Jan, 2020</time>} comment="Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et." />

      <BlogCommentItem id="comment-4" imgURL={require("../../../assets/img/comments-6.jpg")} by="Kay Duggan" time={<time dateTime="2020-01-01">01 Jan, 2020</time>} comment="Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et." />

    </React.Fragment>
  );
}

export default BlogCommentContainer;