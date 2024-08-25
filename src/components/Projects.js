import React from "react";
import projectData from "../data/projectData";

function Projects() {
  return (
    <div className="container mt-4">
      <h1 className="project-header">Projects</h1>
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-6 col-sm-6 col-lg-3 col-md-3" key={index}>
            <div className="card">
              <img
                src={project.image}
                className="card-img-top fixed-size-image"
                alt={`${project.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                {/* <p className="card-text">{project.description}</p> */}
                <div className="d-flex justify-content-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bb" type="button">
                      GitHub
                    </button>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bb" type="button">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
