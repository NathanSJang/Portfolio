import { Link } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons';
import Mailto from 'react-protected-mailto'

import useStyles from "./styles";

export default function FloatingBtn() {
  const classes = useStyles();

  return(
    <div className={classes.FloatingBtnConatiner}r>
      <Mailto 
        className={classes.mail} 
        email='sbtan1989@gmail.com' 
        obfuscate={true} 
        sytle={{color: 'white'}} 
      />
      <div className={classes.vl}></div>
    </div>
  );
}