import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import dream from '../../assets/Dreaming.png';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
    <AppBar position="fixed"  >
    <Toolbar sx={{ justifyContent: 'space-between' }}> 
    <Box sx={{ flex: 1 }} />
      <Link
        variant="h6"
        underline="none"
        color="inherit"
        sx={{ fontSize: 24 }}
        href='/'
      >
      Dreaming Big
      </Link>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Link
          color="inherit"
          href="#explore"
          variant="h6"
          underline="none"
          sx={rightLink}
        >
        {'Explore EB'}
        </Link>
        <Link
          color="inherit"
          variant="h6"
          underline="none"
          sx={rightLink}
          href="#projects"
        >
          {'Projects'}
        </Link>
        <Link
          variant="h6"
          color="inherit"
          underline="none"
          sx={rightLink}
          href="#contact"
        >
          {'Contact'}
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
  <Toolbar />    </div>
  );
}

export default AppAppBar;
