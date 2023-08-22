import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListItemIcon, ListItemButton, ListSubheader, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import useStyles from './style';
import blueLogo from '../../Assets/cineFilx_blue.png';
import redLogo from '../../Assets/cineflixCureved_red.png';
import genreIcons from '../../Assets/genres/index';

import { useGetGenresQuery } from '../../services/TMDB';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
function SideBar({ setMobileOpen }) {
  const classes = useStyles();
  const { data, isFetching, refetch } = useGetGenresQuery();
  const theme = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, []);
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="logo og website"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30} alt="genre images" />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={id} className={classes.links} to="/">
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30} alt="genre images" />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}

export default SideBar;
