import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let url;
    if (selectedPhase && searchQuery) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}&q=${encodeURI(searchQuery)}`;
    } else if (searchQuery) {
      url = `http://localhost:4000/projects?q=${encodeURI(searchQuery)}`;
    } else if (selectedPhase) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}`;
    } else {
      url = "http://localhost:4000/projects";
    }
    fetch(url)
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, [selectedPhase, searchQuery])

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onCompleteEditing = (updatedProject) => {
    setProjects(projects => projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    }))
    setProjectToEdit(null);
  };

  const onProjectEdit = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const onProjectDelete = (projectId) => {
    console.log('deleting a project', projectId)
    // setProjects(projects => {
    //   return projects.filter(originalProject => {
    //     return originalProject.id !== projectId;
    //   })
    // })
    // shorter version:
    setProjects(projects => projects.filter(p => p.id !== projectId))
  }

  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onCompleteEditing={onCompleteEditing}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        onProjectEdit={onProjectEdit}
        onProjectDelete={onProjectDelete}
        setSelectedPhase={setSelectedPhase}
        setSearchQuery={setSearchQuery}
        />
    </div>
  );
};

export default App;
