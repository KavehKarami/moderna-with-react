import React from 'react';

const FooterLinks = (props) => {
  return (
    <div className="col-lg-3 col-md-6 footer-links">
      <h4>{props.title}</h4>
      <ul>
        {props.children.map((linkText, index) => <li key={index}><i className="bx bx-chevron-right"></i><a href="/#">{linkText}</a></li>)}
      </ul>
    </div>
  );
}

export default FooterLinks;