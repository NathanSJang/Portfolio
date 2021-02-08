import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  mainConatiner: {
    paddingTop: '8vmin',
    height: '160vh',
  },
  title: {
    marginBottom: '2vmin',
    fontFamily: 'Noto Sans JP',
  },
  divider: {
    backgroundColor: '#FF7272',
    width: '55%',
  },
  contactDiv: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1vmin',
  },
  contactText: {
    marginLeft: '1vmin',
    fontFamily: 'Noto Sans JP',
  },
  mailtotext: {
    color: 'white',
    fontFamily: 'Noto Sans JP',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  resumeDiv: {
    display: 'flex',
    marginTop: '3vmin',
  },
  resumeBtn: {
    marginLeft: '2vmin',
    fontFamily: 'Noto Sans JP'
  },
  resumeImg: {
    marginTop: '5vmin',
    height: 'auto',
    width: '60%',
    minWidth: '400px',
  },
  text: {
    fontFamily: 'Noto Sans JP',
  },
}));