import React from 'react';

const Home = () => {
  return (
    <div id="home" className="section background fadeIn">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <span style={{ fontSize: '3em', color: 'black' }}>
            <i className="display-1 fas fa-code"></i>
          </span>
          <h1 style={{ margin: '4px 40px' }} className="display-4">
            Nick Bisignano
          </h1>
          <p className="lead">Web Developer</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
