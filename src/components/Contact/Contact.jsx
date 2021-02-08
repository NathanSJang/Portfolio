import { Container, Grid, Typography, Divider, Link, Button } from "@material-ui/core";
import { Drafts, Call, GitHub, LinkedIn } from '@material-ui/icons';
import Mailto from 'react-protected-mailto'
import ResumePdf from '../../pdf/Resume.pdf'
import ResumePng from '../../image/resume.png'
import useStyles from "./styles";

export default function Resume() {
  const classes = useStyles();

  return(
    <Container id='resume' className={classes.mainConatiner}>
      <Typography className={classes.title} variant='h4' align='left'>CONTACT</Typography>
      <Divider className={classes.divider} />
      <Grid xs={12}>
        <div className={classes.contactDiv}>
          <Call />
          <Typography className={classes.contactText} variant='h6'>
            <Mailto  className={classes.mailtotext} tel='415-317-5944' />
          </Typography>
        </div>
        <div className={classes.contactDiv}>
          <Drafts />
          <Typography className={classes.contactText} variant='h6'>
            <Mailto 
              className={classes.mailtotext} 
              email='sbtan1989@gmail.com' 
              obfuscate={true} 
              sytle={{color: 'white'}} 
            />
          </Typography>
        </div>
        <div className={classes.contactDiv}>
          <GitHub />
            <Link 
              className={classes.contactText} 
              variant='h6' 
              color='inherit' 
              href='https://github.com/grey128'
            >
              https://github.com/grey1287
            </Link>
        </div>
        <div className={classes.contactDiv}>
          <LinkedIn />
            <Link
              className={classes.contactText} 
              variant='h6'
              color='inherit' 
              href='https://www.linkedin.com/in/nathan-sb-j/'
            >
              https://www.linkedin.com/in/nathan-sb-j/
            </Link>
        </div>
      </Grid>
      <Grid className={classes.resumeDiv} xs={4}>
        <Typography className={classes.text} variant='h6'>Download </Typography>
        <Button className={classes.resumeBtn} variant='outlined' color="inherit" href={ResumePdf}>resume</Button>
      </Grid>
        <img className={classes.resumeImg} src={ResumePng} alt="resume"/>
    </Container>
  );
}