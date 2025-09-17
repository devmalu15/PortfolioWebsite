import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro-text">Hi, my name is</p>
        <h2 className="name-heading">Dev Malu.</h2>
        <h3 className="tagline-heading">I build things for the web.</h3>
        <p className="description">
          I'm a passionate software engineer who loves creating beautiful and
          performant web applications. I thrive on solving complex problems and
          turning ideas into reality with clean, efficient code.
        </p>
        <a href="#projects" className="hero-button">
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;