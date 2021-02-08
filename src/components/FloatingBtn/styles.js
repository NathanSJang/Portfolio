import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  FloatingBtnConatiner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    marginTop: '530px',
    marginLeft: '1vmin',
  },
  vl: {
    borderLeft: '1px solid #FF7272',
    height: '300px',
    marginLeft: '1vmin'
  },
  icon: {
    marginBottom: '1vmin',
    '&:hover' :{
      color: '#FF7272',
    },
  }
}));