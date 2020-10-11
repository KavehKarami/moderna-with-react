import React from 'react';

const BlogAuthor = (props) => {
  return (
    <div className="blog-author clearfix">
      <img src={props.imgURL} className="rounded-circle float-left" alt="" />
      <h4>{props.name}</h4>
      <div className="social-links">
        <a href="https://twitters.com/#"><i className="icofont-twitter"></i></a>
        <a href="https://facebook.com/#"><i className="icofont-facebook"></i></a>
        <a href="https://instagram.com/#"><i className="icofont-instagram"></i></a>
      </div>
      <p>{props.about}</p>
    </div>
  );
}

export default BlogAuthor;