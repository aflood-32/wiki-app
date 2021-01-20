import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Layout: React.FC<React.ReactNode> = ({ children }) => (
  <>
    <header className="header">
      <div className="loader" />
      <div className="wrap wrap_fluid">
        <div className="header__block">
          <button type="button" className="burger-btn">
            <span />
            <span />
          </button>
          <div className="header__logo-holder">
            <Link className="header__logo" to="/">
              <img className="hidden visible-md" src={Logo} alt="main-logo" />
              <span>wikipedia</span>
            </Link>
          </div>
          <button type="button" className="header__sign-in hidden visible-md">
            sign in
          </button>
        </div>
      </div>
      {/* <div className="menu-block"> */}
      {/*  <p>23423</p> */}
      {/*  <p>23423</p> */}
      {/*  <p>23423</p> */}
      {/*  <p>23423</p> */}
      {/*  <p>23423</p> */}
      {/*  <p>23423</p> */}
      {/* </div> */}
    </header>
    <div className="container">{children}</div>
    <footer className="footer">
      <div className="wrap wrap_fluid">
        <div className="footer__block">
          <div className="footer__section footer__section_lg-md">
            <div className="footer__links hidden visible-md">
              <ul>
                <li>
                  <a href="https://en.wikipedia.org/">
                    I want to leave this site and visit <b>NORMAL</b> wiki
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__section footer__section_lg-xs">
            <div className="footer__history">
              <ul>
                <li>Your history</li>
                <li>
                  <a href="/">William 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
