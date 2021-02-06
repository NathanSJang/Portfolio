import { Grid, Typography, Paper, Link } from "@material-ui/core";
import { GitHub, Public } from '@material-ui/icons';

import useStyles from "./styles";

export default function Projects1() {
  const classes = useStyles();

  return(
    <Grid container className={classes.slideContainer}>
      <Grid item xs={6}>
        <img className={classes.image} src="https://i.imgur.com/2zrP3Za.png" alt="imgur"/>
      </Grid>
      <Grid className={classes.contentContainer} item xs={5}>
        <Typography variant='body1' align='right'>Project</Typography>
        <Typography className={classes.title} variant='h6' align='right'>Nathan's Recipe blog</Typography>
        <Paper className={classes.papper}>
          <Typography variant='body1'>
            In one week, I built first full-stack app that share My recipes from my ex-work place.
            First user centric CURD project and using Google OAuth authoriztion for users
          </Typography>
        </Paper>
        <ul className={classes.listUl}>
          <li className={classes.list}>HTML & CSS</li>
          <li className={classes.list}>Node Js</li>
          <li className={classes.list}>Mongoose & MongoDB</li>
        </ul>
        <div className={classes.iconContainer}>
          <Link color='inherit' href='https://github.com/grey1287/mogoose-blog'>
            <GitHub className={classes.icon} fontSize='large' />
          </Link>
          <Link color='inherit' href='https://nathan-recipe.herokuapp.com/'>
            <Public fontSize='large' />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}