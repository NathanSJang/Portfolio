import { Link } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons';

import useStyles from "./styles";

export default function FloatingMail() {
  const classes = useStyles();

  return(
    <div className={classes.FloatingBtnConatiner}r>
      <Link 
        className={classes.icon}  
        color='inherit' 
        href='https://github.com/grey128'
      >
        <GitHub />
      </Link>
      <Link
        className={classes.icon}
        color='inherit'
        href='https://www.linkedin.com/in/nathan-sb-j/'
      >
        <LinkedIn />
      </Link>
      <div className={classes.vl}></div>
    </div>
  );
}