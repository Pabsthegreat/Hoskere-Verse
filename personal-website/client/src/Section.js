import React from 'react';
import './Section.css';

const Section = ({ title, description, seemore, link }) => (
  <section className='section2'>
    <header>
      <h1>{title}</h1>
    </header>
    <article>
      <p>{description}</p>
    </article>
    <footer>
      <a href={link} aria-label={`Read more about ${title}`} title={`Read more about ${title}`} className='seemore'>
        <p>{seemore} &rarr;</p>
      </a>
    </footer>
  </section>
);

export default Section;
