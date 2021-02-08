import { Grid, Typography, Paper, Link,  useMediaQuery, useTheme } from "@material-ui/core";
import { GitHub, Public } from '@material-ui/icons';

import useStyles from "./styles";

export default function Projects2() {
  const classes = useStyles();
  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));

  return(
    <Grid container className={classes.slideContainer}>
      <Grid item xs={6}>
        <img className={classes.image} src="https://i.imgur.com/5d0jjKF.png" alt="imgur"/>
      </Grid>
      <Grid className={classes.contentContainer} item xs={5}>
        <Typography className={classes.textHeader} variant='body1' align='right'>Project</Typography>
        <Typography className={`${classes.title} ${classes.textHeader}`}variant='h6' align='right'>MineSweeper</Typography>
        {!smMatches ? 
          <></>
          :
          <>
          <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              I build this game after three weeks of learning to code.<br />
              I thought it would be a fun way for myself and remembering my childhood.
              Using simple Vanilla JavaScript recursion founction and Web api for display
            </Typography>
          </Paper>
          <ul className={`${classes.listUl} ${classes.text}`}>
            <li className={classes.list}>HTML & CSS</li>
            <li className={classes.list}>JavaScript</li>
          </ul>
          </>
        }
        <div className={classes.iconContainer}>
          <Link color='inherit' href='https://github.com/grey1287/Minesweeper'>
            <GitHub className={classes.icon} fontSize='large' />
          </Link>
          <Link color='inherit' href='https://grey1287.github.io/Minesweeper/'>
            <Public fontSize='large' />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}