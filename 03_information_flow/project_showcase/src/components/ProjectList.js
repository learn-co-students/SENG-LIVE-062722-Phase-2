import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, loadProjects }) => {

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const renderProjects = (projects) => {
    return projects.map(project => (
      <ProjectListItem
        key={project.id}
        {...project}
      />
    ))
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <button onClick={(e) => loadProjects() }>Reload</button>

      <ul className="cards">{renderProjects(searchResults)}</ul>
    </section>
  );
};

export default ProjectList;