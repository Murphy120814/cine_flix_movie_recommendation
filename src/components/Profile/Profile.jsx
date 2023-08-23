import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  // console.log('THis is profile', user);
  const favoriteMovies = [];
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logOut}>
          LogOut &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add Favorite or watchList some movies to see them here!
        </Typography>
      ) : <Box> Favo  rite Movies</Box>}
    </Box>
  );
}

export default Profile;
