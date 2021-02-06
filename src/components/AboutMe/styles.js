import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    height: '90vh',
    marginTop: '3vmin',
    paddingTop: '20vmin',
  },
  title: {
    marginBottom: '2vmin'
  },
  divider: {
    backgroundColor: '#FF3E55',
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
  },
  list: {
    '&::marker': {
      content: '"▹"',
      color: '#FF3E55',
      marginRight: '1vmin'
    },
    paddingLeft: '1vmin'
  }
}));