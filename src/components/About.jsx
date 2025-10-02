import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
           As a final-year B.Tech student in Computer Science and Engineering, I'm passionate about building robust and scalable back-end solutions. My approach to every project begins with a focus on core logic and data management. I specialize in building RESTful APIs and microservices using the Java language and the Spring Boot framework, which allows me to quickly develop production-ready applications. For data persistence, I have a strong foundation in SQL, designing and optimizing relational databases to ensure data integrity and performance. My goal is to always write clean, maintainable code that effectively solves real-world problems.
          </p>
          
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            {/* Replace with your own image */}
            <img src="my-portfolio\public\picForPortfolio.png" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;