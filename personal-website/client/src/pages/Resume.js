import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume-page">
            <h1 className="resume-heading">Adarsh Hoskere</h1>

            <div className="resume-grid">
                {/* Left Column */}
                <div className="resume-left">
                    <div className="section1">
                        <h3>Education</h3>
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
                        <h3>Languages</h3>
                        <div className="pill-container">
                            <div className="pill">English</div>
                            <div className="pill">Kannada</div>
                            <div className="pill">Hindi</div>
                        </div>
                    </div>

                    <div className="section1">
                        <h3>Passions</h3>
                        <div className="pill-container">
                            <div className="pill">Reading</div>
                            <div className="pill">Cricket</div>
                            <div className="pill">Powerlifting</div>
                        </div>
                    </div>


                    <div className="section1">
                        <h3>Interests</h3>
                        <div className="pill-container">
                            <div className="pill">Artificial Intelligence</div>
                            <div className="pill">Web Development</div>
                            <div className="pill">Mobile App Development</div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="resume-right">
                    <div className="experience">
                        <h3>Experience</h3>
                        <div className="resume-item">
                            <h4>Summer Intern</h4>
                            <p>RAPID Centre @ PESU (2024)</p>
                            <p>
                                - Conducted research on AI-based diabetes-friendly meal plans.
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Tech Head</h4>
                            <p>Quotient Quiz Club, PESU (2023-2024)</p>
                            <p>- Led technical operations for large quiz events.</p>
                        </div>
                    </div>

                    <div className="projects">
                        <h3>Projects</h3>
                        <div className="resume-item">
                            <h4>Diabetes Management</h4>
                            <p>2024 | Bengaluru</p>
                            <p>- Developed a diabetes recommendation system.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Hunter Assassin Game</h4>
                            <p>2023 | Bengaluru</p>
                            <p>- Designed an arcade-style game with animations.</p>
                        </div>
                    </div>
                    <div className="prog_section1">
                        <div className="p_section1">
                            <h3>Languages</h3>
                            <div className="pill-container">
                                <div className="pill">Python</div>
                                <div className="pill">JavaScript</div>
                                <div className="pill">React</div>
                                <div className="pill">Node.js</div>
                                <div className="pill">SQL</div>
                            </div>
                        </div>
                        <div className="p_section1">
                            <h3>Tools</h3>
                            <div className="pill-container">
                                <div className="pill">Git</div>
                                <div className="pill">Docker</div>
                                <div className="pill">VS Code</div>
                                <div className="pill">Postman</div>
                                <div className="pill">Jupyter</div>
                            </div>
                        </div>
                        <div className="p_section1">
                            <h3>Technologies</h3>
                            <div className="pill-container">
                                <div className="pill">TensorFlow</div>
                                <div className="pill">Keras</div>
                                <div className="pill">Express</div>
                                <div className="pill">MongoDB</div>
                                <div className="pill">Firebase</div>
                            </div>
                        </div>
                        <div className="c_section1">
                            <h3>Certifications</h3>
                            <div className="pill-container">
                                <div className="pill">AWS Certified Solutions Architect</div>
                                <div className="pill">Google IT Automation with Python</div>
                                <div className="pill">IBM Data Science Professional</div>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <h3>Contact</h3>
                        <div className="contact-items">
                            <p className="contact-item">Email:
                                <a href="mailto:adarsh11018@gmail.com>">adarsh11018@gmail.com</a></p>
                            <p className="contact-item">LinkedIn:
                                <a href="https://www.linkedin.com/in/adarsh-hoskere/">Adarsh Hoskere</a></p>
                            <p className="contact-item">GitHub:
                                <a href=""></a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <a
                href="/images/AdarshArunHoskreResume.png"
                download="Adarsh_Resume"
                className="download-button"
            >
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
