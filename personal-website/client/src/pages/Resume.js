import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <h1 className="resume-heading">My Resume</h1>

            {/* Education Section */}
            <div className="resume-section">
                <h2>Education</h2>
                <div className="education-details">
                    <p><strong>PES University, Bengaluru</strong></p>
                    <p>Bachelor of Technology in Computer Science (2023-2027)</p>
                    <p><strong>CGPA:</strong> 8.5 (till now)</p>
                </div>
            </div>

            {/* Work Experience Section */}
            <div className="resume-section">
                <h2>Work Experience</h2>
                <div className="experience-item">
                    <p><strong>RAPID Centre, PES University</strong></p>
                    <p>AI/ML Intern (Summer 2024)</p>
                    <p>Key Highlights:</p>
                    <ul>
                        <li>Developed a diabetes management system using regression models and data analytics.</li>
                        <li>Wrote a research paper on generating diabetes-friendly daily meal and exercise plans.</li>
                    </ul>
                </div>
            </div>

            {/* Skills Section */}
            <div className="resume-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    <div className="skills-category">
                        <h3>Programming</h3>
                        <p className="skill-item">C</p>
                        <p className="skill-item">Python</p>
                        <p className="skill-item">JavaScript</p>
                    </div>
                    <div className="skills-category">
                        <h3>Frameworks</h3>
                        <p className="skill-item">React</p>
                        <p className="skill-item">Django</p>
                        <p className="skill-item">Flutter</p>
                    </div>
                    <div className="skills-category">
                        <h3>Databases</h3>
                        <p className="skill-item">MySQL</p>
                        <p className="skill-item">MongoDB</p>
                    </div>
                    <div className="skills-category">
                        <h3>Other Tools</h3>
                        <p className="skill-item">Git</p>
                        <p className="skill-item">VS Code</p>
                        <p className="skill-item">Homebrew</p>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="resume-section">
                <h2>Certifications</h2>
                <div className="certifications-container">
                    <p className="certification-item">Google Data Analytics Professional Certificate</p>
                    <p className="certification-item">Meta Front-End Developer Specialization</p>
                    <p className="certification-item">Linux Foundation Open Source Development Specialization</p>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="resume-section">
                <h2>Achievements</h2>
                <div className="achievements-container">
                    <p className="achievement-item">Tech Head of Quotient Quiz Club, PESU</p>
                    <p className="achievement-item">Organized Conquiztador, a large quiz event</p>
                    <p className="achievement-item">Developed an arcade-style game using Pygame and MySQL</p>
                </div>
            </div>

            {/* Languages Section */}
            <div className="resume-section">
                <h2>Languages Spoken</h2>
                <div className="pill-container">
                    <div className="pill">English</div>
                    <div className="pill">Kannada</div>
                    <div className="pill">Hindi</div>
                </div>
            </div>

            {/* Soft Skills Section */}
            <div className="resume-section">
                <h2>Soft Skills</h2>
                <div className="pill-container">
                    <div className="pill">Communication</div>
                    <div className="pill">Leadership</div>
                    <div className="pill">Creativity</div>
                    <div className="pill">Team Management</div>
                </div>
            </div>

            {/* Download Button */}
            <a href="/images/AdarshArunHoskreResume.png" download="Adarsh_Arun_Hoskere_Resume" className="download-button">
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
