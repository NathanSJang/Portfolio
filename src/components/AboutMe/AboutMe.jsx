import { Typography, Grid, Divider, Container } from '@material-ui/core';

import useStyles from "./styles";

export default function AboutMe() {
  const classes = useStyles();

  return(
    <Container id='aboutme' className={classes.container}>
      <Typography  className={classes.title} variant='h4' align="left">About Me</Typography>
      <Divider className={classes.divider} />
      <Grid className={classes.textContainer} container spacing={3}>
        <Grid item xs={6}>
          <Typography variant='h6'>
            Software Engineer who used to be a professional high-end sushi Chef. 
            My strong passion in creating new dishes easily transformed into building new products, enjoying finding a path to solving problems.
            From several years of fine-dining experience.
          </Typography>
          <div className={classes.technologiesContainer}>
            <Typography variant="h6">Technologies</Typography>
            <ul>
              <Grid className={classes.listContainer} xs={8}>
                <Grid xs={3}>
                  <li className={classes.list}>Java Script</li>
                  <li className={classes.list}>HTML & css </li>
                  <li className={classes.list}>React </li>
                </Grid>
                <Grid xs={3}>
                  <li className={classes.list}>Node Js </li>
                  <li className={classes.list}>Mongoose </li>
                  <li className={classes.list}>MongoDB </li>
                </Grid>
              </Grid>
            </ul>
          </div>
        </Grid>
        <Grid item xs={4}>
          <h1>Photo</h1>
        </Grid>
      </Grid>
    </Container>
  );
}