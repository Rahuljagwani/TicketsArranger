"use client"

import { AppBar, Toolbar, Button, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import { Brightness4 as DarkThemeIcon, Brightness7 as LightThemeIcon } from '@mui/icons-material';
import { useContext, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TaskContext } from '@/context/TaskContext';
import { Task } from '@/types';

const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { orderBy, groupBy, setOrderBy, setGroupBy } = useContext(TaskContext);

  const handleGrouping = (event: SelectChangeEvent) => {
    const value: keyof Task = event.target.value as keyof Task;
    setGroupBy(value);
  };

  const handleOrdering = (event: SelectChangeEvent) => {
    const value: keyof Task = event.target.value as keyof Task;
    setOrderBy(value);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" style={{ background: 'white', color: 'black' }}>
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
            <Typography variant="inherit">Group&nbsp;&nbsp;</Typography>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={groupBy}
              label="Group"
              onChange={handleGrouping}
              size='small'
              className='w-24'
            >
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="userId">Users</MenuItem>
              <MenuItem value="status">Status</MenuItem>
            </Select>
          </MenuItem>
          <MenuItem>
            <Typography variant="inherit">Sort&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={orderBy}
              label="Order"
              onChange={handleOrdering}
              size='small'
              className='w-24'
            >
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
            </Select>
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

