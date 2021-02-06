import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  slideContainer: {
    marginBottom: '10vmin',
  },
  image: {
    width: '110%',
    zIndex: '-1',
    marginTop: '8vmin',
    marginLeft: '5vmin'
  },
  contentContainer: {
    marginTop: '8vmin'
  },
  listUl: {
    display: 'flex',
    paddingLeft: '10vmin',
    justifyContent: 'space-evenly',
    marginTop: '3vmin'
  },
  list: {
    '&::marker': {
      content: 'none',
    },
  },
  papper: {
    backgroundColor: '#1c1d25',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '3vmin'
  },
  title: {
    marginBottom: '2vmin',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '4vmin',
  },
  icon: {
    marginRight: '1vmin',
    padding: '2.5px',
  }
}));