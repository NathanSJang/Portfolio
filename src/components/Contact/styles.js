import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  mainConatiner: {
    paddingTop: '8vmin',
    height: '160vh',
  },
  title: {
    marginBottom: '2vmin'
  },
  divider: {
    backgroundColor: '#FF3E55',
    width: '55%',
  },
  contactDiv: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1vmin',
  },
  contactText: {
    marginLeft: '1vmin',
  },
  mailtotext: {
    color: 'white',
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
  },
  resumeImg: {
    marginTop: '5vmin',
  }
}));