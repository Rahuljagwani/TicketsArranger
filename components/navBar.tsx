"use client"

// components/NavigationBar.tsx
import { AppBar, Toolbar, Button, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import { Brightness4 as DarkThemeIcon, Brightness7 as LightThemeIcon } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { useState } from 'react';

const NavigationBar: React.FC = () => {
  const muiTheme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Button variant="outlined" color="inherit" onClick={handleMenuClick}>
          Display
        </Button>
        <Menu
          id="display-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>
            <Typography variant="inherit">Sort</Typography>
            <select>
              <option value="priority">Priority</option>
              <option value="users">Users</option>
              <option value="status">Status</option>
            </select>
          </MenuItem>
          <MenuItem>
            <Typography variant="inherit">Group</Typography>
            <select>
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </MenuItem>
        </Menu>

        {/* Right side: Theme toggle button */}
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          {false ? <LightThemeIcon /> : <DarkThemeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

