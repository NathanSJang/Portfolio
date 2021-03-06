import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#071B37',
  },
  navLinks: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    marginTop: '2vmin',
  },
  logo: {
    width: '55%',
    minWidth: '80px',
    marginTop: '1.2vmin',
    marginLeft: '-1.5vmin',
  },
  logoBtn: {
    padding: '0',
  },
  text: {
    color: '#FF7272',
    fontFamily: 'Big Shoulders Display',
    fontSize: '20px'
  },
  resumeBtn: {
    color: '#FF7272',
    border: '1px solid #FF7272',
    marginLeft: '2vmin'
  },
}));