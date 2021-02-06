import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#1c1d25',
  },
  navLinks: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    marginTop: '1.5vmin',
  },
  logo: {
    color: '#FF3E55'
  },
  text: {
    color: '#FF3E55',
  },
  resumeBtn: {
    color: '#FF3E55',
    border: '1px solid #FF3E55',
    marginLeft: '2vmin'
  }
}));