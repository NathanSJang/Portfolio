import { useState } from 'react';
import { Container } from '@material-ui/core';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import gate from '../../image/goldengate.jpg'
import AboutMe from '../../components/AboutMe/AboutMe'

import useStyles from "./styles";

export default function App() {
  const [user, setUser] = useState(getUser());

  const classes = useStyles();

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Container className={classes.mainContainer}>
        <img src={gate} alt="welcome"/>
        <AboutMe  />
        <h1>project</h1>
        <h1>down-Resume</h1>
        <h1>thanks</h1>
      </Container>
    </main>
  );
}
