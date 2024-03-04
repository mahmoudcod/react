import React from 'react';
import Model from '../componend/Model';

const aboutContent = {
  title: "About Me",
  description: "Welcome to my portfolio! I'm a passionate developer...",
};

// About component
const About = () => (
    <>
  <div className="about-container">
    <h1>{aboutContent.title}</h1>
    <p>{aboutContent.description}</p>
  </div>
   <Model />
  </>
);

export default About