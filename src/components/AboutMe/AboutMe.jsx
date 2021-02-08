import { Typography, Grid, Divider, Container, Paper } from '@material-ui/core';
import nathan from '../../image/nathan.jpeg'

import useStyles from "./styles";

export default function AboutMe() {
  const classes = useStyles();

  return(
    <Container id='aboutme' className={classes.container}>
      <div>
      <Typography  className={classes.title} variant='h4' align="left">About Me</Typography>
      <Divider className={classes.divider} />
      <Grid className={classes.textContainer} container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Typography className={classes.text} variant='h6'>
            Software Engineer who used to be a professional high-end sushi Chef. 
            My strong passion in creating new dishes easily transformed into building new products, enjoying finding a path to solving problems.
            From several years of fine-dining experience.
          </Typography>
          <div className={classes.technologiesContainer}>
            <Typography className={classes.textHeader} variant="h6">Technologies</Typography>
            <Grid xs={12}>
              <ul className={classes.listContainer}>
                <Grid xs={6}>
                  <li className={classes.list}>JavaScript</li>
                  <li className={classes.list}>HTML & CSS </li>
                  <li className={classes.list}>React </li>
                </Grid>
                <Grid xs={6}>
                  <li className={classes.list}>Node Js </li>
                  <li className={classes.list}>Mongoose </li>
                  <li className={classes.list}>MongoDB </li>
                </Grid>
              </ul>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} lg={6}>
          <Paper className={classes.potoPaper}>
            <img className={classes.myPhoto} src={nathan} alt="me"/>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </Container>
  );
}