import React, { Fragment, useState } from 'react';
const Navbar = () => {
  const [current, setCurrent] = useState('home');
  return (
    <Fragment>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a
          className="navbar-brand"
          style={{ margin: 'auto', paddingRight: '64px' }}
          href="#"
        >
          Nick Bisignano
        </a>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={'nav-item ' + (current == 'home' ? 'active' : '')}>
              <a
                onClick={e => setCurrent(e.target.name)}
                name="home"
                className="nav-link"
                href="#"
              >
                Home
              </a>
            </li>
            <li className={'nav-item ' + (current == 'about' ? 'active' : '')}>
              <a
                onClick={e => setCurrent(e.target.name)}
                name="about"
                className="nav-link"
                href="#about"
              >
                About
              </a>
            </li>
            <li
              className={'nav-item ' + (current == 'contact' ? 'active' : '')}
            >
              <a
                onClick={e => setCurrent(e.target.name)}
                name="contact"
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://github.com/nbisigna"
                target="_blank"
              >
                <i class="fab fa-github fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://linkedin.com/in/nbisigna"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.npmjs.com/~nbisigna"
                target="_blank"
              >
                <i class="fab fa-npm fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.instagram.com/nickbisignano/"
                target="_blank"
              >
                <i class="fab fa-instagram-square fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.youtube.com/channel/UCcNI3QYJA2VeidzV-39UbMA"
                target="_blank"
              >
                <i class="fab fa-youtube-square fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://twitter.com/nickbisignano"
                target="_blank"
              >
                <i class="fab fa-twitter fa-lg" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://facebook.com/nick.bisignano7/"
                target="_blank"
              >
                <i class="fab fa-facebook-square fa-lg" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navbar;
