import React from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({ projects }) => {
  // console.log(projects)

  const renderProjects = (projects) => {
    return projects.map(project => (
      <ProjectListItem
        key={project.id}
        project={project}
      />
    ))
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Ruby</button>
        <button>Rails</button>
      </div>

      <ul className="cards">{renderProjects(projects)}</ul>
    </section>
  )
}

export default ProjectList;