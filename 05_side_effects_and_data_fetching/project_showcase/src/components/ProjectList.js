import ProjectListItem from "./ProjectListItem";
import { useState, useEffect } from 'react';

const ProjectList = ({
  projects,
  setSelectedPhase,
  searchQuery,
  setSearchQuery
}) => {
  const [searchInputText, setSearchInputText] = useState("");

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInputText);
    }, 300)
    console.log('effect running');
    return () => {
      console.log('cleanup running');
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInputText])

  console.log('rendering');
  return (
    <section>
      <h2>Projects</h2>
      {/* <h1>Count: {count}</h1> */}
      <div className="filter">
        <button onClick={() => setSelectedPhase("")}>All</button>
        <button onClick={() => setSelectedPhase("5")}>Phase 5</button>
        <button onClick={() => setSelectedPhase("4")}>Phase 4</button>
        <button onClick={() => setSelectedPhase("3")}>Phase 3</button>
        <button onClick={() => setSelectedPhase("2")}>Phase 2</button>
        <button onClick={() => setSelectedPhase("1")}>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
