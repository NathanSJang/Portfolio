import { useMediaQuery, useTheme } from '@material-ui/core'
import Mailto from 'react-protected-mailto'

import useStyles from "./styles";

export default function FloatingBtn() {
  const classes = useStyles();
  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));

  return(
    <>
    {smMatches ? 
    <div className={classes.FloatingBtnConatiner}r>
      <Mailto 
        className={classes.mail} 
        email='nathan.s.jang@gmail.com' 
        obfuscate={true} 
        sytle={{color: 'white'}} 
      />
      <div className={classes.vl}></div>
    </div>
    : 
    <></>
  }
    </>
  );
}