import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//import AppSearch from './AppSearch'

export default function GAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cloud Seed
          </Typography>
          {/*<Button color="inherit">Login</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Table</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Contact</Button>
  <Button color="inherit">Table</Button>*/}
          
        </Toolbar>
        <Toolbar>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Table</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Table</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
