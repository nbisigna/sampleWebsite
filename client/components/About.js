import React, { Fragment } from 'react';
import nick from '../../public/images/nick.jpg';
const About = () => {
  return (
    <div id="about">
      <img id="nick" src={nick} />
      <p>
        Nick Bisignano is a web developer and software engineer based in the
        greater New York City area with a passion for learning cutting edge
        software technologies and teaching coding to beginners. He has
        experience building websites and applications for clients using
        javaScript, Node.js, React, and Ruby on Rails.
      </p>
      <br />
      <p>
        Nick got his bachelors degree from Lafayette College, located in Easton,
        Pennsylvania, where he studied engineering. He worked a non-technical
        position at a start-up company that was successfully sold in 2016 before
        transitioning to software engineering. He trained at Hack Reactor's
        advanced software engineering immersive bootcamp and has worked
        professionally ever since.
      </p>
      <br />
      <p>
        In his spare time, Nick enjoys writing and producing original music,
        performing stand-up comedy, as well as writing, producing, and acting in
        films.
      </p>
      <br />
      <p>
        "I always thought of myself as a people person and could never see
        myself spending all day on a computer screen until my first job out of
        college required me to spend all day on a computer screen using software
        written by the engineering team. After failing to learn to code for many
        years, I finally buckled down and utilized resources on the internet to
        teach myself so I could have a fulfilling career. I want to encourage
        and empower others to overcome the preconceived notions that I once had
        about software engineering and to use it to enhance any area of their
        life be it getting a good paying job at a company or using it to pursue
        personal passions."
      </p>
      <br />
      <p> -Nick Bisignano</p>
    </div>
  );
};

export default About;
