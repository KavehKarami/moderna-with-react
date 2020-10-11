import React from 'react';

const BlogSingleFooter = () => {
  return (
    <div className="entry-footer clearfix">
      <div className="float-left">
        <i className="icofont-folder"></i>
        <ul className="cats">
          <li><a href="/blog/#">Business</a></li>
        </ul>

        <i className="icofont-tags"></i>
        <ul className="tags">
          <li><a href="/blog/#">Creative</a></li>
          <li><a href="/blog/#">Tips</a></li>
          <li><a href="/blog/#">Marketing</a></li>
        </ul>
      </div>

      <div className="float-right share">
        <a href="/blog/#" title="Share on Twitter"><i className="icofont-twitter"></i></a>
        <a href="/blog/#" title="Share on Facebook"><i className="icofont-facebook"></i></a>
        <a href="/blog/#" title="Share on Instagram"><i className="icofont-instagram"></i></a>
      </div>

    </div>
  );
}

export default BlogSingleFooter;