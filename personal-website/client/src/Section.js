import React from 'react';
import './Section.css';

const Section = ({ title, description, seemore,link }) => (
  <section className='section'>
    <h1>{title}</h1>
    
    <p>{description}</p>
    
    <a href={link}>
      {seemore} --&gt;
    </a>
  </section>
);

export default Section;
