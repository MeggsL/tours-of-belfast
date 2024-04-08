"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Using the MUI Positioned Menu component with modifications

export default function UpTopMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Box
    height={10}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}

  >
    <Container
    maxWidth="sm"
    sx={{ border: '2px solid grey' }}
    >

      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#482880'
        }}
      >
       Handy Info
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Weather</MenuItem>
        <MenuItem onClick={handleClose}>Air Quality</MenuItem>
        <MenuItem onClick={handleClose}>Pollen Count</MenuItem>
      </Menu>
      </Container>
      </Box>
    </div>
  );
}