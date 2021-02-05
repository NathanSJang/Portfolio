import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-scroll'

import useStyles from "./styles";

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="inherit" position="fixed">
      <h1>logo</h1>
      <Toolbar className={classes.toolBar}>
        <Button>
        <Link
          activeClass="active"
          to='aboutme'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        about me
        </Link>
        </Button>
        <Button>
        <Link
          activeClass="active"
          to=''
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        project
        </Link>
        </Button>
        <Button>
        <Link
          activeClass="active"
          to=''
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        down-Resume
        </Link>
        </Button>      
      </Toolbar>
    </AppBar>
  );
}