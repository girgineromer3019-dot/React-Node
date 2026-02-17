import React from "react";
import './Project.css';

function Projects() {
  return (
    <section id="projects">
      <h2><i className="fa-solid fa-dumbbell"></i> Mijn Projects</h2>
      <ul>
        <li><a href="OmerGIRGINER.html" target="_blank">Mijn Website</a></li>
        <li><a href="Python-Notities.html" target="_blank">Python-Notities</a></li>
        <li><a href="To-Do-List.html" target="_blank">To-Do List</a></li>
        <li>Currency Converter</li>
        <li>Face Recognition System</li>
      </ul>
    </section>
  );
}

export default Projects;
