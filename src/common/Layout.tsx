import React from 'react';

const Layout:React.FC<React.ReactNode> = ({ children }) => (
  <>
    <header className="header">header</header>
    <div className="container">
      {children}
    </div>
    <footer className="footer">
      <div className="wrap">
        <div className="footer__block">
          <div className="footer__section">
            <div className="footer__links">
              <ul>
                <li>
                  <a href="/">link</a>
                  <a href="/">link</a>
                  <a href="/">link</a>
                  <a href="/">link</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__section footer__section_lg">
            <div className="footer__history">
              <ul>
                <li>your history today</li>
                <li><a href="/">asdasd</a></li>
                <li><a href="/">asdasd</a></li>
                <li><a href="/">asdasd</a></li>
                <li><a href="/">asdasd</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
