import React, { useState, useEffect, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, userSelector } from '../../features/auth';
import useStyles from './styles';

import { ColorModeContext } from '../../utils/ToggleColorMode';

import { SideBar, Search } from '../index';

import { fetchToken, moviesApi, createSessionID } from '../../utils';

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const { isAuthenticated, user } = useSelector(userSelector);
  const isMobile = useMediaQuery('(max-width:600px)');
  const token = localStorage.getItem('request_token');
  const dispatch = useDispatch();
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  const colorMode = useContext(ColorModeContext);

  // console.log(user);
  useEffect(() => {
    const logInUser = async () => {
      // console.log('token', token);
      if (token) {
        if (sessionIdFromLocalStorage) {
          // console.log('local', 1);
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionID();
          // console.log('session', 2);
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            sx={{ outline: 'none' }}
            onClick={() => { setMobileOpen((previousMobileOpen) => !previousMobileOpen); }}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && <Search />}

          <div>
            {!isAuthenticated
              ? (<Button color="inherit" onClick={fetchToken}> LogIn &nbsp; <AccountCircle /></Button>)
              : (
                <Button
                  color="inherit"
                  component={Link}
                  to={`profile/${user.id}`}
                  className={classes.linkButton}
                  onClick={() => { }}
                >
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                    alt="This is profile avatar"
                  />
                </Button>
              )}
          </div>

          { isMobile && <Search />}
        </Toolbar>

      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile
            ? (
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={() => { setMobileOpen((previousMobileOpen) => !previousMobileOpen); }}
                // className={classes.drawerBackground}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}

              >
                <SideBar setMobileOpen={setMobileOpen} />
              </Drawer>
            )
            : (
              <Drawer
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                open
              >
                <SideBar setMobileOpen={setMobileOpen} />
              </Drawer>
            )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
