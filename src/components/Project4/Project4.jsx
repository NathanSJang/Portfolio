import { Grid, Typography, Paper, Link } from "@material-ui/core";
import { GitHub, Public } from '@material-ui/icons';

import useStyles from "./styles";

export default function Projects3() {
  const classes = useStyles();

  return(
    <Grid container className={classes.slideContainer}>
      <Grid item xs={6}>
        <img className={classes.image} src="https://i.imgur.com/4uB9H5o.png" alt="imgur"/>
      </Grid>
      <Grid className={classes.contentContainer} item xs={5}>
        <Typography variant='body1' align='right'>Project</Typography>
        <Typography className={classes.title} variant='h6' align='right'>KUSAKABE</Typography>
        <Paper className={classes.papper}>
          <Typography variant='body1'>
            In one week, I built React full-stack app that my ex-work place named 'KUSAKABE'.<br />
            First MERN stack app using token base user centric CURD and Stripe API for checkout
          </Typography>
        </Paper>
        <ul className={classes.listUl}>
          <li className={classes.list}>React & JavaScript</li>
          <li className={classes.list}>Node Js</li>
          <li className={classes.list}>Mongoose & MongoDB</li>
        </ul>
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