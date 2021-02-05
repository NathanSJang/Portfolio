import { Typography, Grid } from '@material-ui/core';

import useStyles from "./styles";

export default function AboutMe() {
  const classes = useStyles();

  return(
    <div className={classes.container}>
      <Typography className={classes.title} variant='h3' align="center">About Me</Typography>
      <Grid container>
        <Grid item xs={4}>
          <h1>Photo</h1>
        </Grid>
        <Grid item xs={8}>
          <Typography id='aboutme' variant='h6'>
            Software Engineer who used to be a professional high-end sushi Chef. 
            My strong passion in creating new dishes easily transformed into building new products, enjoying finding a path to solving problems.
            From several years of fine-dining experience.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}