import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Button } from '@mui/material';
import { Share, PictureAsPdf, MoreVert } from '@mui/icons-material';




const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'white'}}>
      <Toolbar>
        {/* Left Side */}
        <Typography variant="h6" sx={{ flexGrow: 1, color:'black' }}>
          Investor Report
        </Typography>

        {/* Right Side */}
        <Button
          sx={{ backgroundColor: 'blue', color: 'white', marginRight:'5px' }}
        >
          Share
        </Button>
        
        <IconButton color="inherit">
          <PictureAsPdf sx={{ color: 'black' }}/>
        </IconButton>
        <IconButton color="inherit">
          <Avatar sx={{ backgroundColor: 'blue' }}>A</Avatar>
        </IconButton>
        <IconButton color="inherit" onClick={handleMenuOpen}>
        <MoreVert sx={{ color: 'black' }} />
        </IconButton>
        
        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          {/* Add more options as needed */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
