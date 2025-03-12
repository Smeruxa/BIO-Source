import { useState } from "react";

export default function ProjectCard({ title, image, callback, tooltip }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="project-card" onClick={callback} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <h3 className="project-title">{title}</h3>
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" />
            </div>
            <div className={`tooltip ${hovered ? "visible" : ""}`}>{tooltip}</div>
        </div>
    );
}