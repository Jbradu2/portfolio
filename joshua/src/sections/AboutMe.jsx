// src/sections/AboutMe.jsx
import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.section`
  padding: 20px;
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <h2>About Me</h2>
      <p1>Hello, I'm Joshua R. Bradshaw, a 34-year-old coding enthusiast based in San Antonio. Recently, I successfully completed the coding program at the University of Texas, where I honed my skills and developed a strong foundation in various technologies.

I specialize in front-end and back-end development, showcasing proficiency in JavaScript, React, Node.js, CSS, HTML, TypeScript, as well as working with both SQL and MongoDB databases. My journey in coding has equipped me with the tools to create dynamic and responsive web applications.

Passionate about all things technology, I am driven by the ever-evolving nature of the field. I find joy in staying up-to-date with the latest trends and exploring innovative solutions to complex problems. Beyond coding, I am excited about contributing to the tech community and collaborating on projects that push the boundaries of what is possible.

Join me on this exciting coding journey as we navigate the digital landscape together.</p1>
    </AboutMeWrapper>
  );
};

export default AboutMe;
