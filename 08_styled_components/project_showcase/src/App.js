import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import About from "./components/About";
import ProjectsContainer from "./components/ProjectsContainer";

import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  :root {
    --turquoise: #00efe1;
    --mid-turquoise: #14d5c9;
    --dark-turquoise: #00333f;
    --black: #030416;
    --white: #f1f1f1;
    --grey: #d6e2e7;
    --dark-grey: #7f8a8e;
    --yellow: #f9c51a;
    --orange: #ff5c00;
    --fuschia: #e80352;
    --blue: #338fff;
    --blue-dark: #145cb3;
    --purple: #cda2ff;
    --green: #00ef7c;
    --color: ${props => props.theme.color};
    --background: ${props => props.theme.backgroundColor};
    --primary: ${props => props.theme.primary};
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Fira Code", monospace;
    font-size: 16px;
    color: var(--color);
    background-color: var(--background);
  }

  a {
    color: var(--color);
    border-bottom: 1px solid var(--color);
    text-decoration: none;
  }

  a:hover {
    background-color: var(--blue);
    border-bottom: 1px solid var(--blue);
  }

  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  min-height: 100vh;
`

const lightTheme = {
  color: '#030416',
  backgroundColor: '#f1f1f1',
  primary: '#00333f'
}
const darkTheme = {
  color: '#f1f1f1',
  backgroundColor: '#030416',
  primary: '#00efe1'
}

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <ProjectsContainer />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
