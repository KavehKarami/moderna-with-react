import React from 'react';
import Header from "../components/core/Header"
import Footer from '../components/core/Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
      <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </React.Fragment>
  );
}

export default Layout;