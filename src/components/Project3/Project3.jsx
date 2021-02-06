import { Grid, Typography, Paper, Link } from "@material-ui/core";
import { GitHub, Public } from '@material-ui/icons';

import useStyles from "./styles";

export default function Projects1() {
  const classes = useStyles();

  return(
    <Grid container className={classes.slideContainer}>
      <Grid item xs={6}>
        <img className={classes.image} src="https://i.imgur.com/OawVSsG.png" alt="imgur"/>
      </Grid>
      <Grid className={classes.contentContainer} item xs={5}>
        <Typography variant='body1' align='right'>Project</Typography>
        <Typography className={classes.title} variant='h6' align='right'>Hackathon Calulator</Typography>
        <Paper className={classes.papper}>
          <Typography variant='body1'>
            In the React hackathon, I worked with other developers and less than 6 hours to create an Calculator.<br />
            used Codesandbox for collaboration and deploy.
          </Typography>
        </Paper>
        <ul className={classes.listUl}>
          <li className={classes.list}>HTML & CSS</li>
          <li className={classes.list}>Node Js</li>
          <li className={classes.list}>Mongoose & MongoDB</li>
        </ul>
        <div className={classes.iconContainer}>
          <Link color='inherit' href='https://github.com/grey1287/React_Calculator'>
            <GitHub className={classes.icon} fontSize='large' />
          </Link>
          <Link color='inherit' href='https://csb-qudbz.netlify.app/'>
            <Public fontSize='large' />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}