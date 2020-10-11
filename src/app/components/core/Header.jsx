import React from 'react';
import { routes } from '../../routes';
import { useLocation } from "react-router-dom"
import CustomLink from '../utils/CustomLink';

const Footer = () => {
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <header id="header" className={pathname === "/" ? "fixed-top header-transparent" : "fixed-top"}>
        <div className="container">

          <div className="logo float-left">
            <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
          </div>

          <nav className="nav-menu  float-right d-none d-lg-block">
            <ul>
              {routes.map(((route, index) => {
                if (route.label)
                  return <CustomLink key={index} path={route.path} exact={route.exact} label={route.label} />
              }))}
              <li className="drop-down"><a href="/">Drop Down</a>
                <ul>
                  <li><a href="/#">Drop Down 1</a></li>
                  <li className="drop-down"><a href="/#">Drop Down 2</a>
                    <ul>
                      <li><a href="/#">Deep Drop Down 1</a></li>
                      <li><a href="/#">Deep Drop Down 2</a></li>
                      <li><a href="/#">Deep Drop Down 3</a></li>
                      <li><a href="/#">Deep Drop Down 4</a></li>
                      <li><a href="/#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="/#">Drop Down 3</a></li>
                  <li><a href="/#">Drop Down 4</a></li>
                  <li><a href="/#">Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </nav>


        </div>
      </header>


    </React.Fragment>
  );
}

export default Footer;