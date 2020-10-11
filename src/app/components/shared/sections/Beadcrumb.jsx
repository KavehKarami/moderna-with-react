import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{props.name}</h2>
          <ol>
            <li><Link to={props.href || "/"}>{props.linkText || "Home"}</Link></li>
            <li>{props.nested ? <li><Link to={props.nestedHref || "/blog"}>{props.name}</Link></li> : props.name}</li>
            {props.nested && <li>{props.id}</li>}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;