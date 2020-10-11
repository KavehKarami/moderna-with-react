import React from 'react';

const BlogCategory = () => {
  return (
    <React.Fragment>
      <h3 className="sidebar-title">Categories</h3>

      <div className="sidebar-item categories">
        <ul>
          <li><a href="/blog/#">General <span>(25)</span></a></li>
          <li><a href="/blog/#">Lifestyle <span>(12)</span></a></li>
          <li><a href="/blog/#">Travel <span>(5)</span></a></li>
          <li><a href="/blog/#">Design <span>(22)</span></a></li>
          <li><a href="/blog/#">Creative <span>(8)</span></a></li>
          <li><a href="/blog/#">Educaion <span>(14)</span></a></li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BlogCategory;