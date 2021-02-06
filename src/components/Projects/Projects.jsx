import { Container } from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import useStyles from "./styles";


export default function Projects() {
  const slider = (
    <AwesomeSlider >
      <div>project 1</div>
      <div>project 2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  )

  const classes = useStyles();

  return(
    <Container id="projcets" className={classes.mainConatiner}>
    <h1>Projects</h1>
    {slider}
    </Container>
  );
}