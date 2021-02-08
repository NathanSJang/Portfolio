import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    height: '130vh',
    marginTop: '3vmin',
    paddingTop: '20vmin',
  },
  title: {
    marginBottom: '2vmin',
    fontFamily: 'Noto Sans JP',
  },
  divider: {
    backgroundColor: '#FF7272',
    width: '55%',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  technologiesContainer: {
    marginTop: '3vmin',
  },
  textContainer: {
    marginTop: '3vmin',
    fontFamily: 'Noto Sans JP',
  },
  list: {
    '&::marker': {
      content: '"▹"',
      color: '#FF7272',
      marginRight: '1vmin'
    },
    paddingLeft: '1vmin'
  },
  text: {
    fontFamily: 'Noto Sans JP',
  },
  textHeader: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '400'
  },
  myPhoto: {
    maxHeight: '300px',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  },
  potoPaper: {
    maxWidth: '280px',
  }
}));