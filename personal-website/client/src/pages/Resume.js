import React from "react";
import { Helmet } from "react-helmet";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume-page">
            <Helmet>
                <title>Adarsh Hoskere - Resume</title>
                <meta name="description" content="Resume of Adarsh Hoskere, a Computer Science student at PES University, Bengaluru." />
                <meta name="keywords" content="Adarsh Hoskere, Resume, Computer Science, PES University, Bengaluru" />
            </Helmet>
            <header>
                <h1 className="resume-heading">Adarsh Hoskere</h1>
            </header>
            <main className="resume-grid">
                {/* Left Column */}
                <section className="resume-left">
                    <div className="section1">
                        <h2>Education</h2>
                        <p className="section1-item">
                            <strong>Bachelor of Technology - Computer Science</strong>
                            <br /> PES University, Bengaluru (2023-2027)
                        </p>
                        <p className="section1-item">
                            <strong>Class 1 - 12</strong>
                            <br /> Sri Kumaran Children's Home CBSE, Bengaluru (2011-2023)
                            <p>Class 10: 93.4%</p>
                            <p>Class 12: 93.4%</p>
                        </p>
                        <p className="section1-item">CGPA: 8.5 (till now)</p>
                    </div>

                    <div className="section1">
                        <h2>Languages</h2>
                        <div className="pill-container">
                            <div className="pill">English</div>
                            <div className="pill">Kannada</div>
                            <div className="pill">Hindi</div>
                        </div>
                    </div>

                    <div className="section1">
                        <h2>Passions</h2>
                        <div className="pill-container">
                            <div className="pill">Reading</div>
                            <div className="pill">Cricket</div>
                            <div className="pill">Powerlifting</div>
                        </div>
                    </div>

                    <div className="section1">
                        <h2>Interests</h2>
                        <div className="pill-container">
                            <div className="pill">Artificial Intelligence</div>
                            <div className="pill">Web Development</div>
                            <div className="pill">Mobile App Development</div>
                        </div>
                    </div>
                </section>

                {/* Right Column */}
                <section className="resume-right">
                    <div className="experience">
                        <h2>Experience</h2>
                        <div className="resume-item">
                            <h3>Summer Intern</h3>
                            <p>RAPID Centre @ PESU (2024)</p>
                            <p>- Conducted research on AI-based diabetes-friendly meal plans.</p>
                        </div>
                        <div className="resume-item">
                            <h3>Tech Head</h3>
                            <p>Quotient Quiz Club, PESU (2023-2024)</p>
                            <p>- Led technical operations for large quiz events.</p>
                        </div>
                    </div>

                    <div className="projects">
                        <h2>Projects</h2>
                        <div className="resume-item">
                            <h3>Diabetes Management</h3>
                            <p>2024 | Bengaluru</p>
                            <p>- Developed a diabetes recommendation system.</p>
                        </div>
                        <div className="resume-item">
                            <h3>Hunter Assassin Game</h3>
                            <p>2023 | Bengaluru</p>
                            <p>- Designed an arcade-style game with animations.</p>
                        </div>
                    </div>
                    <div className="prog_section1">
                        <div className="p_section1">
                            <h2>Languages</h2>
                            <div className="pill-container">
                                <div className="pill">Python</div>
                                <div className="pill">JavaScript</div>
                                <div className="pill">React</div>
                                <div className="pill">Node.js</div>
                                <div className="pill">SQL</div>
                            </div>
                        </div>
                        <div className="p_section1">
                            <h2>Tools</h2>
                            <div className="pill-container">
                                <div className="pill">Git</div>
                                <div className="pill">Docker</div>
                                <div className="pill">VS Code</div>
                                <div className="pill">Postman</div>
                                <div className="pill">Jupyter</div>
                            </div>
                        </div>
                        <div className="p_section1">
                            <h2>Technologies</h2>
                            <div className="pill-container">
                                <div className="pill">TensorFlow</div>
                                <div className="pill">Keras</div>
                                <div className="pill">Express</div>
                                <div className="pill">MongoDB</div>
                                <div className="pill">Firebase</div>
                            </div>
                        </div>
                        <div className="c_section1">
                            <h2>Certifications</h2>
                            <div className="pill-container">
                                <div className="pill">AWS Certified Solutions Architect</div>
                                <div className="pill">Google IT Automation with Python</div>
                                <div className="pill">IBM Data Science Professional</div>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <h2>Contact</h2>
                        <div className="contact-items">
                            <p className="contact-item">Email:
                                <a href="mailto:adarsh11018@gmail.com">adarsh11018@gmail.com</a></p>
                            <p className="contact-item">LinkedIn:
                                <a href="https://www.linkedin.com/in/adarsh-hoskere/">Adarsh Hoskere</a></p>
                            <p className="contact-item">GitHub:
                                <a href="https://github.com/adarshhoskere">Adarsh Hoskere</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <a
                    href="/images/AdarshArunHoskreResume.png"
                    download="Adarsh_Resume"
                    className="download-button"
                >
                    Download Resume
                </a>
            </footer>
        </div>
    );
};

export default Resume;
