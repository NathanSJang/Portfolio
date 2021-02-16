import { Grid, Typography, Paper, Link, useMediaQuery, useTheme } from "@material-ui/core";
import { GitHub, Public } from '@material-ui/icons';

import useStyles from "./styles";

export default function Projects1() {
  const classes = useStyles();
  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));

  return(
    <Grid container className={classes.slideContainer}>
      <Grid item xs={6}>
        <img className={classes.image} src="https://i.imgur.com/2zrP3Za.png" alt="imgur"/>
      </Grid>
      <Grid className={classes.contentContainer} item xs={5}>
        <Typography className={classes.textHeader} variant='body1' align='right'>Project</Typography>
        <Typography className={`${classes.title} ${classes.textHeader}`} variant='h6' align='right'>Nathan's Recipe blog</Typography>
        {!smMatches ? 
          <></>
          :
          <>
            <Paper className={classes.papper}>
              <Typography className={classes.text} variant='body1'>
                In one week, I built first full-stack app that shares my recipes from my ex-work place.
                First user centric CURD project and using Google OAuth authoriztion for users
              </Typography>
            </Paper>
            <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              <span className={classes.languagetext}>HTML & CSS & EJS </span> - Frontend structure and styling
              <br />
              <span className={classes.languagetext}>Express</span> - MVC routing
              <br />
              <span className={classes.languagetext}>Node Js</span> - Non blocking network process
              <br />
              <span className={classes.languagetext}>MongoDB</span> - Embedding Like data for recipes data
              <br />
              <span className={classes.languagetext}>Mongoose</span> - Manage object mapping between Node Js and MongoDB
            </Typography>
          </Paper>
          </>
          }
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