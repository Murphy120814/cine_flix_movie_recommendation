import React from 'react';
import { Typography, Modal, Button, Box, CircularProgress, ButtonGroup, Grid, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function MovieInformation() {
  const { id } = useParams();
  return (
    <div>
      MovieInformation
    </div>
  );
}

export default MovieInformation;
