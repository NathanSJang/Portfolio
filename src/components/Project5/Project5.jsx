import { Grid, Typography, Paper, Link, useMediaQuery, useTheme } from "@material-ui/core";
import { GitHub, Public } from '@material-ui/icons';

import useStyles from "./styles";

export default function Projects3() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));


  return(
    <Grid container className={!matches ? '' : `${classes.slideContainer}`}>
      <Grid item xs={6}>
        <img className={classes.image} src="https://i.imgur.com/wCoNAA4.png" alt="imgur"/>
      </Grid>
      <Grid className={!matches ? '' : `${classes.contentContainer}`} item xs={5}>
        <Typography className={classes.textHeader} variant='body1' align='right'>Project</Typography>
        <Typography className={`${classes.title} ${classes.textHeader}`} variant='h6' align='right'>Memories</Typography>
        {!smMatches ?
        <></>
        :
        <>
          <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              React Codealong<br />
              Build SNS sytle MERN stack app for people's memories using Google OAuth and token base user centric CURD
            </Typography>
          </Paper>
          <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              <span className={classes.languagetext}>React & JavaScript</span> - Frontend component
              <br />
              <span className={classes.languagetext}>Redux</span> - Manage React states
              <br />
              <span className={classes.languagetext}>Express</span> - MVC routing
              <br />
              <span className={classes.languagetext}>Node Js</span> - Non blocking network process
              <br />
              <span className={classes.languagetext}>MongoDB</span> - data server
              <br />
              <span className={classes.languagetext}>Mongoose</span> - Manage object mapping between Node Js and MongoDB
            </Typography>
          </Paper>
        </>
        }
        <div className={classes.iconContainer}>
          <Link color='inherit' href='https://github.com/NathanSJang/React_memories'>
            <GitHub className={classes.icon} fontSize='large' />
          </Link>
          <Link color='inherit' href='https://memories-nj.herokuapp.com/'>
            <Public fontSize='large' />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}