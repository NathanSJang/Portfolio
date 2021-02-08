import { Typography, Grid, Grow, Container } from "@material-ui/core";
import useStyles from "./styles";

export default function Welcome() {
  const classes = useStyles();

  return(
    <Container id='welcome' className={classes.welcomeConatainer}>
        <Grid className={classes.paddingTop} container>
          <Grid xs={12}>
            <Grow in timeout={1500}>
              <Typography style={{ color: '#FF7272'}} className={classes.title} variant="h6">Hi, My name is</Typography>
            </Grow>
            <Grow in timeout={2500}>
              <Typography className={classes.title} variant="h2">Nathan (Sungbok) Jang</Typography>
            </Grow>
          </Grid>
          <Grid xs={12}>
            <Grow in timeout={2800}>
              <Typography className={classes.text} variant="h6">
                I'm a software engineer based in San Francisco, CA.<br /> 
                I have strong passion for learning and building new things. 
              </Typography>
            </Grow>
          </Grid>
        </Grid>
      </Container>
  );
}