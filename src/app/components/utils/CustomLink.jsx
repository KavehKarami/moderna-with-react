import React from 'react';
import { Route, Link } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <Route
      path={props.path}
      exact={props.exact}
      children={
        ({ match }) =>
          match ?
            <li className="active"><Link to={props.path}>{props.label}</Link></li>
            :
            <li ><Link to={props.path}>{props.label}</Link></li>
      }
    />

  );
}

export default CustomLink;