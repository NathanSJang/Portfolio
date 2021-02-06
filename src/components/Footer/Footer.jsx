import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();

  return(
    <Container className={classes.container}>
      <footer>
        <Typography variant='body2' align='center'>Designed & Built by Nathan Jang</Typography>
        <Typography variant='body2' align='center'>Thank you</Typography>
      </footer>
    </Container>
  );
}