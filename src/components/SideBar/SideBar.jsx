import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListItemIcon, ListItemButton, ListSubheader, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './style';
import blueLogo from '../../Assets/cineFilx_blue.png';
import redLogo from '../../Assets/cineflixCureved_red.png';
import genreIcons from '../../Assets/genres/index';

function SideBar({ setMobileOpen }) {
  const classes = useStyles();
  const theme = useTheme();
  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
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
            <ListItemButton onClick={() => { }}>
              <ListItemIcon>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30} alt="genre images" />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
    </>
  );
}

export default SideBar;
