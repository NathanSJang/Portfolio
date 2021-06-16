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
        <img className={classes.image} src="https://i.imgur.com/gGgSiMX.png" alt="imgur"/>
        <img className={classes.image1} src="https://i.imgur.com/4RYFoxA.png" alt="imgur2"/>
      </Grid>
      <Grid className={classes.contentContainer} item xs={5}>
        <Typography className={classes.textHeader} variant='body1' align='right'>Project</Typography>
        <Typography className={`${classes.title} ${classes.textHeader}`}variant='h6' align='right'>Chat_Chat</Typography>
        {!smMatches ? 
          <></>
          :
          <>
          <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              React Code-along<br />
              Build live chat app for people working from home using React, GraphQL
            </Typography>
          </Paper>
          <Paper className={classes.papper}>
            <Typography className={classes.text} variant='body1'>
              <span className={classes.languagetext}>React & Bootstrap</span> - Frontend structure and styling
              <br />
              <span className={classes.languagetext}>GraphQL & Apollo Server</span> - Using GraphQL query <br/>
              <span style={{ paddingLeft: '200px' }}>load data from database</span>
              <br />
              <span className={classes.languagetext}>PostgreSQL</span> - Database for app
              <br />
              <span className={classes.languagetext}>Sequelize</span> - Object-relational mapping for Postgres
              <br />
              <span className={classes.languagetext}>AWS</span> - Depolyment for app
            </Typography>
          </Paper>
          </>
        }
        <div className={classes.iconContainer}>
          <Link color='inherit' href='https://github.com/NathanSJang/react_chat'>
            <GitHub className={classes.icon} fontSize='large' />
          </Link>
          <Link color='inherit' href='http://nathan-react-chat.com'>
            <Public fontSize='large' />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}