import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  navLinks: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    marginTop: '1.5vmin',
  },
}));