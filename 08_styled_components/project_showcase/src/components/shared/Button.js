import styled, { css } from "styled-components";

export default styled.button`
  appearance: auto;
  padding: ${props => props.large ? '1.5rem 2.25rem' : '0.5rem 0.75rem'};
  border: none;
  font: inherit;
  font-weight: 600;
  font-size: ${props => props.large ? '1.5rem' : '1rem'};;
  color: inherit;
  cursor: pointer;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  border: ${props => `2px solid ${props.theme.primary}`};
  transition: background-color 0.2s;

  &.active, &:focus, &:hover {
    /* outline: none; */
    background-color: ${props => props.theme.primary};
    border: ${props => `2px solid ${props.theme.primary}`};
    color: ${props => props.theme.backgroundColor}
  }

  ${props => props.mr && css`
    margin-right: 0.5rem;
  `}
`