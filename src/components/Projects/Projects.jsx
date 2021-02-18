import { Container } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Project1 from '../Project1/Project1';
import Project2 from '../Project2/Project2';
import Project3 from '../Project3/Project3';
import Project4 from '../Project4/Project4';
import Project5 from '../Project5/Project5';


import useStyles from "./styles";


export default function Projects() {
  const classes = useStyles();

  const slider = (
    <AwesomeSlider>
      <div><Project4 /></div>
      <div><Project5 /></div>
      <div><Project3 /></div>
      <div><Project1 /></div>
      <div><Project2 /></div>
    </AwesomeSlider>
  )


  return(
    <Container id="projcets" className={classes.mainConatiner}>
    <h1 className={classes.textHeader}>Projects</h1>
    {slider}
    </Container>
  );
}