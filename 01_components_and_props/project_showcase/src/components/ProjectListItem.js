import React from 'react';

const ProjectListItem = ({project}) => {
  // console.log(project);
  const { image, name, about, link, phase } = project;
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt="" />
        <button className="claps">👏0</button>
      </figure>

      <section className="details">
        <h4>{name}</h4> 
        <p>{about}</p>
        <a href={link}>Link</a>
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  )
}

export default ProjectListItem;