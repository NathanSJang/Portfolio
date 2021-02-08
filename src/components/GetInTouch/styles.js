import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    height: '70vh',
    marginTop: '3vmin',
    paddingTop: '1vmin',
  },
  title: {
    marginBottom: '2vmin',
    fontFamily: 'Noto Sans JP',
    fontWeight: '400',
  },
  touchBtn: {
    color: '#FF3E55',
    border: '1px solid #FF3E55',
    marginTop: '3vmin',
  },
  mailtotext: {
    color: '#FF3E55',
    textDecoration: 'none',
    fontFamily: 'Noto Sans JP',
  },
  text: {
    fontFamily: 'Noto Sans JP',
  },
}));