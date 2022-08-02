import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "./shared";

const Card = styled.li`
  max-width: 400px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 2px solid var(--dark-turquoise);

  @media screen and (max-width: 588px) {
    display: block;
    max-width: inherit;
  }

  & > a {
    border-bottom: none;
  }

  & > a:hover {
    border-bottom: none;
    background-color: transparent;
  }
`

const Figure = styled.figure`
  max-height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 175px;
    object-fit: cover;
  }

  .claps {
    color: transparent;
    text-shadow: 0 0 0 ${props => props.theme.primary};
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .claps:focus, .claps:hover {
    color: transparent;
    text-shadow: 0 0 0 ${props => props.theme.backgroundColor};
  }
`

const Details = styled.section`
  /* margin: 0.5rem; */
  h4, p {
    margin: 0.5rem 0;
  }
`

const Footer = styled.footer`
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
`

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 2px solid var(--dark-turquoise);
  margin: 0.25rem;

  ${props => props.color === "blue" && css`
    border: 2px solid var(--blue-dark);
    background-color: var(--blue);
    color: var(--white);
  `}
  ${props => props.color === "red" && css`
    border: 2px solid var(--orange);
    background-color: var(--fuschia);
    color: var(--white);
  `}
`

const ProjectListItem = ({
  project,
  onProjectDelete,
}) => {
  const { id, image, about, name, link, phase } = project;

  const [clapCount, setClapCount] = useState(0);

  const handleClap = (clapCount) => setClapCount(clapCount + 1);

  const handleDeleteClick = () => {
    onProjectDelete(id)
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE"
    })
  };

  return (
    <Card>
      <Link to={`/projects/${id}`}>
        <Figure>
          <img src={image} alt={name} />
          <Button onClick={handleClap} className="claps">
            👏{clapCount}
          </Button>
        </Figure>
      </Link>

      <Details>
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </Details>

      <Footer>
        <Badge color={(phase === "1" || phase === "2") ? 'blue' : 'red'}>Phase {phase}</Badge>
        <div className="manage">
          <Button mr as={Link} to={`/projects/${id}/edit`}>
            <FaPencilAlt />
          </Button>
          <Button onClick={handleDeleteClick}>
            <FaTrash />
          </Button>
        </div>
      </Footer>
    </Card>
  );
};

export default ProjectListItem;
