import { Container, Typography, Grid, Button } from '@material-ui/core'
import Mailto from 'react-protected-mailto'


import useStyles from "./styles";

export default function GetInTouch() {
  const classes = useStyles();

  return(
    <Container id='getInTouch' className={classes.container}>
      <Typography className={classes.title} variant='h4'>Get In Touch</Typography>
      <Grid xs={6}>
        <Typography varinat='h6'>
          I'm currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </Typography>
      </Grid>
      <Button className={classes.touchBtn} varinat='outlined' href='sbtan1989@gmail.com'>
      <Mailto 
              className={classes.mailtotext} 
              email='sbtan1989@gmail.com' 
              obfuscate={true} 
              sytle={{color: 'white'}} 
            />
      </Button>
    </Container>
  );
}