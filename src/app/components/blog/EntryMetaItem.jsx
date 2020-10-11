import React from 'react';
import { Link } from 'react-router-dom';

const EntryMetaItem = (props) => {
  return (
    <li className="d-flex align-items-center">
      <i className={props.icon}></i>
      <Link to={`/blog/${props.blogId}`}>{props.title}</Link>
    </li>
  );
}

export default EntryMetaItem;