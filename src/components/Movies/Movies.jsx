import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../index';

function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((store) => store.currentGenreOrCategory);
  const { data, isFetching, error } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (data.results.length === 0) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movie Match.
          <br />
          Please Search for Something Else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An Error Occurred.';
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
