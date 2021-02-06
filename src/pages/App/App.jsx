import { useState } from 'react';
import { Container } from '@material-ui/core';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import Welcome from '../../components/Welcome/Welcome';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

import useStyles from "./styles";

export default function App() {
  const [user, setUser] = useState(getUser());

  const classes = useStyles();

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Container className={classes.mainContainer}>
        <Welcome />
        <AboutMe  />
        <Projects />
        <Contact />
        <h1>thanks</h1>
      </Container>
    </main>
  );
}
