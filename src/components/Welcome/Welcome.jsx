import { Typography, Grid, Grow, Container } from "@material-ui/core";
import useStyles from "./styles";

export default function Welcome() {
  const classes = useStyles();

  return(
    <Container className={classes.welcomeConatainer}>
        <Grid className={classes.paddingTop} container>
          <Grid xs={8}>
            <Grow in timeout={1500}>
              <Typography className={classes.title} variant="h6">Hi, My name is</Typography>
            </Grow>
            <Grow in timeout={2500}>
              <Typography className={classes.title} variant="h2">Nathan(Sungbok) Jang</Typography>
            </Grow>
          </Grid>
          <Grid xs={6}>
            <Grow in timeout={2800}>
              <Typography variant="h6">
                I'm a software engineer based in San Francisco, CA.<br /> 
                I have Passion for create App
              </Typography>
            </Grow>
          </Grid>
        </Grid>
      </Container>
  );
}