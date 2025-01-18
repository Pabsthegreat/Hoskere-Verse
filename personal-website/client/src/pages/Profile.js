import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-hero">
                <img 
                    src="/images/download.jpeg"
                    alt="Adarsh Hoskere" 
                    className="profile-image" 
                />
                <div className="profile-intro">
                    <h1 className="profile-name">Hi, I'm Adarsh Hoskere!</h1>
                    <p className="profile-tagline">
                        A passionate software developer with expertise in building scalable solutions, blending creativity with logic. I turn ideas into impactful digital experiences.
                    </p>
                    <div className="profile-actions">
                        <Link to="/projects">View My Projects</Link>
                        <Link to="/resume">See my resume</Link>
                    </div>
                </div>
            </div>
            
            <div className="profile-about">
                <h2>About Me</h2>
                <p>
                    With a strong foundation in computer science and hands-on experience in AI/ML and web development, I’m driven to solve real-world problems. From building a diabetes management system during my internship at RAPID Centre to organizing <strong>Conquiztador</strong>, I thrive in diverse challenges. My expertise spans across backend development, cloud engineering, and creating interactive user experiences. 
                </p>
                <p>
                    Outside of coding, I enjoy quizzing, writing blogs, and learning about cutting-edge technologies. Let’s create something amazing together!
                </p>
            </div>
            
            <div className="profile-highlights">
                <h2>What I Bring to the Table</h2>
                <ul>
                    <li>🚀 Proficient in building reliable and scalable web and mobile applications.</li>
                    <li>📈 Skilled in data analytics and AI-powered solutions.</li>
                    <li>🛠️ Tech stack includes <strong>React</strong>, <strong>Django</strong>, <strong>Flutter</strong>, <strong>AWS</strong>, and more.</li>
                    <li>🌟 A creative problem-solver with leadership and team management skills.</li>
                </ul>
            </div>
            
            <div className="profile-cta">
                <h2>Let’s Connect!</h2>
                <p>
                    Curious to know more about my work or collaborate on exciting projects? 
                    Feel free to explore my site or get in touch!
                </p>
                <div className="profile-socials">
                    <a href="https://github.com/Pabsthegreat" target="_blank" rel="noopener noreferrer" className="profile-social-link">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/adarsh-hoskere" target="_blank" rel="noopener noreferrer" className="profile-social-link">
                        LinkedIn
                    </a>
                    <a href="#contact" className="profile-social-link">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
