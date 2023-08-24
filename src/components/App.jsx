import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { Actors, Movies, MovieInformation, Profile, NavBar } from './index';

// ?importing css lib
import useStyles from './styles';

function App() {
  const classes = useStyles();
  console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiammmm');
  return (
    <div className={classes.root}>
      <CssBaseline enableColorScheme />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
