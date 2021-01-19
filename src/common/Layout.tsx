import React from "react";
import { Link } from "react-router-dom";

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
              wikipedia
            </Link>
          </div>
          <button type="button" className="header__sign-in hidden visible-md">
            sign in
          </button>
        </div>
      </div>
    </header>
    <div className="container">{children}</div>
    <footer className="footer">
      <div className="wrap wrap_fluid">
        <div className="footer__block">
          <div className="footer__section footer__section_lg-md">
            <div className="footer__links hidden visible-md">
              <ul>
                <li>
                  <a href="/">Main version on english</a>
                </li>
                <li>
                  <span>or</span>
                </li>
                <li>
                  <button type="button">Choose your language</button>
                </li>
                <li>
                  <button type="button">mobile view</button>
                </li>
                <li>
                  <a href="/">classic wikipedia</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__section footer__section_lg-xs">
            <div className="footer__history">
              <ul>
                <li>your history today</li>
                <li>
                  <a href="/">William 3</a>
                </li>
                <li>
                  <a href="/">Dj Beat</a>
                </li>
                <li>
                  <a href="/">Dmytro Gordon</a>
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
