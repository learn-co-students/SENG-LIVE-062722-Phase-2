import ProjectListItem from "./ProjectListItem";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

const ProjectList = ({
  projects,
  onProjectEdit,
  onProjectDelete,
  setSelectedPhase,
  setSearchQuery
}) => {
  const [searchInputText, setSearchInputText] = useState("");

  const { phase } = useParams();
  console.log('phase', phase)

  const projectItems = projects.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        project={project}
        onProjectEdit={onProjectEdit}
        onProjectDelete={onProjectDelete}
      />
    );
  });

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInputText);
    }, 300)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInputText])

  useEffect(() => {
    setSelectedPhase(phase);
  }, [phase, setSelectedPhase])

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <NavLink className="button" exact to="/projects">All</NavLink>
        <NavLink className="button" to="/projects/phase/5">Phase 5</NavLink>
        <NavLink className="button" to="/projects/phase/4">Phase 4</NavLink>
        <NavLink className="button" to="/projects/phase/3">Phase 3</NavLink>
        <NavLink className="button" to="/projects/phase/2">Phase 2</NavLink>
        <NavLink className="button" to="/projects/phase/1">Phase 1</NavLink>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
};

export default ProjectList;
