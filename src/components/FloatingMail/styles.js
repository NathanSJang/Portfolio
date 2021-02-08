import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  FloatingBtnConatiner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    marginTop: '45vmin',
    float: 'right',
    marginRight: '3vmin',
    right: '0',
  },
  vl: {
    borderLeft: '1px solid #FF7272',
    height: '300px',
    marginLeft: '1vmin'
  },
  mail: {
    writingMode: 'vertical-lr',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '2vmin',
  },
}));