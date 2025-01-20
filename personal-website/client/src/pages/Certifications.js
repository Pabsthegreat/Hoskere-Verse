import './Certifications.css';   
import ProjectTile from './Projectiles';
import React, { useState, useEffect } from "react";

const Certifications = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        fetch("/data/Certificates.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data); // Log the data for debugging
                if (data.certificates && Array.isArray(data.certificates)) {
                    setCertificates(data.certificates); // Access the "certificates" array
                } else {
                    console.error("Fetched data does not contain 'certificates' array:", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching certificates:", error);
            });
    }, []);

    return (
        <div>
            <h1>Certifications</h1>
            {certificates.length === 0 ? (
                <p>Loading certifications or no certificates available...</p>
            ) : (
                <div className="certificates">
                    {certificates.map((post) => (
                            post.image && <ProjectTile key={post.id} post={post} />
                        ))}
                    </div>
          )}
        </div>
  );
};

export default Certifications;

