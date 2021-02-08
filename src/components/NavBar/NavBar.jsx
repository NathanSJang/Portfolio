import { AppBar, Button, Toolbar, } from '@material-ui/core';
import { Link } from 'react-scroll'
import ResumePdf from '../../pdf/Resume.pdf'
import logo from '../../image/en_grey_logo.png'

import useStyles from "./styles";

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="inherit" position="fixed">
      <Button className={classes.logoBtn}>
        <Link
          activeClass="active"
          to='welcome'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        <img className={classes.logo} src={logo} alt="logo"/>
        </Link>
      </Button>
      <Toolbar className={classes.toolBar}>
        <Button>
        <Link
          className={classes.text}
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
          className={classes.text}
          activeClass="active"
          to='projcets'
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
          className={classes.text}
          activeClass="active"
          to='resume'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        Contact
        </Link>
        </Button>      
        <Button>
        <Link
          className={classes.text}
          activeClass="active"
          to='getInTouch'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        Get In Touch
        </Link>
        </Button>      
      <Button className={classes.resumeBtn} variant='outlined' href={ResumePdf}>Resume</Button>
      </Toolbar>
    </AppBar>
  );
}