import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProgrammingLangList from '../../components/Home/ProgrammingLangList';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.welcomeMessage}>Welcome to the Matrix</div>
      <ProgrammingLangList />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },

  welcomeMessage: {
    padding: '15px',
    fontSize: '30px',
    color: theme.font,
  },
}));

export default Home;
