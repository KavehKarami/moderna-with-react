import React from 'react';

const Pagination = () => {
  return (
    <div className="blog-pagination">
      <ul className="justify-content-center">
        <li className="disabled"><i className="icofont-rounded-left"></i></li>
        <li><a href="/blog/#">1</a></li>
        <li className="active"><a href="/blog/#">2</a></li>
        <li><a href="/blog/#">3</a></li>
        <li><a href="/blog/#"><i className="icofont-rounded-right"></i></a></li>
      </ul>
    </div>
  );
}

export default Pagination;