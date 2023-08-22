import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';

import { SideBar } from '../index';

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isAuthenticated = true;
  const isMobile = useMediaQuery('(max-width:600px)');
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

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && 'Search....'}

          <div>
            {!isAuthenticated
              ? (<Button color="inherit" onClick={() => { }}> LogIn &nbsp; <AccountCircle /></Button>)
              : (
                <Button
                  color="inherit"
                  component={Link}
                  to="profile/:id"
                  className={classes.linkButton}
                  onClick={() => { }}
                >
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._ARzR7F_fff_KI14yMKBzwHaHa%26pid%3DApi%26h%3D160&f=1&ipt=a9b0fca5521822725e434f0a9b427e93fc6af331bfc978bed78471a42e53e23e&ipo=images"
                    alt="This is profile avatar"
                  />
                </Button>
              )}
          </div>

          { isMobile && 'Search...'}
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
