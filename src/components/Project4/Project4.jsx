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
        <img className={classes.image} src="https://i.imgur.com/4uB9H5o.png" alt="imgur"/>
      </Grid>
      <Grid className={!matches ? '' : `${classes.contentContainer}`} item xs={5}>
        <Typography className={classes.textHeader} variant='body1' align='right'>Project</Typography>
        <Typography className={`${classes.title} ${classes.textHeader}`} variant='h6' align='right'>KUSAKABE</Typography>
        {!smMatches ?
        <></>
        :
        <>
          <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              In one week, I built React full-stack app for my ex-work place named 'KUSAKABE'.<br />
              First MERN stack app using token base user centric CURD and Stripe API for checkout
            </Typography>
          </Paper>
          <ul className={`${classes.listUl} ${classes.text}`}>
            <li className={classes.list}>React & JavaScript</li>
            <li className={classes.list}>Node Js</li>
            <li className={classes.list}>Mongoose & MongoDB</li>
          </ul>
        </>
        }
        <div className={classes.iconContainer}>
          <Link color='inherit' href='https://github.com/grey1287/React_kusakabe'>
            <GitHub className={classes.icon} fontSize='large' />
          </Link>
          <Link color='inherit' href='https://kusakabe-nj.herokuapp.com/'>
            <Public fontSize='large' />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}