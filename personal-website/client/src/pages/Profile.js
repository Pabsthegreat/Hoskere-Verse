import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      {/* Welcome Section */}
      <section className="welcome-section profile-section">
        <h1>Welcome to the <span className="highlight">Hoskere-verse</span>!</h1>
        <p>
          I’m <span className="highlight">Adarsh Hoskere</span>, your friendly Indian tech guy, here to share my passion for coding, creativity, and technology.
        </p>
      </section>

      {/* About Me Section */}
      <section className="about-me-section profile-section">
        <h2>About Me</h2>
        <p>
          I’m a <span className="highlight">Computer Science</span> student at <span className="highlight">PES University (Class of 27')</span>, Bengaluru, India, with a passion for building
          innovative software solutions. I’m a tech enthusiast, an avid reader, and a fitness enthusiast who loves exploring new ideas and technologies. I’m also a huge fan of 
          <span className="highlight"> Manchester United</span>, <span className="highlight">Royal Challengers Bengaluru</span>, and <span className="highlight">Cars</span>.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section profile-section">
        <h2>What I Bring to the Table</h2>
        <ul>
          <li><span className="highlight">Backend Engineering & Cloud Enthusiast:</span> Building robust systems that deliver high performance.</li>
          <li><span className="highlight">Leadership & Collaboration:</span> As the Tech Head of the Quotient Quiz Club, I’ve honed my skills in managing teams and organizing innovative projects like Conquiztador.</li>
          <li><span className="highlight">Adaptability & Creativity:</span> I embrace challenges with curiosity and persistence, from deepfake detectors to ride-hailing apps.</li>
        </ul>
      </section>

      {/* Vision Section */}
      <section className="vision-section profile-section">
        <h2>What Drives Me?</h2>
        <p>
          In this ever-changing world, technology is the key to unlocking new possibilities and solving complex problems. I believe my passion for solving problems
          and learning constantly helps me be the best version of myself. I want to create innovative solutions that make a difference in people’s lives and contribute
          to a better future.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section profile-section">
        <h2>Let’s Connect!</h2>
        <p>
          I would love to hear from you, whether it be about tech, books, fitness, or anything else. Feel free to email me at adarsh11018@gmail.com or connect on:
        </p>
        <p>
          <a href="https://www.linkedin.com/in/adarsh-hoskere/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://github.com/Pabsthegreat" target="_blank" rel="noreferrer">GitHub</a>, or <a href="https://leetcode.com/kingdash" target="_blank" rel="noreferrer">Leetcode</a>.
        </p>
      </section>
    </div>
  );
};

export default Profile;
