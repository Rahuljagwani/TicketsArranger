"use client"

import { AppBar, Toolbar, Button, IconButton, Typography, MenuItem, Menu, makeStyles, createStyles } from '@mui/material';
import { Brightness4 as DarkThemeIcon, Brightness7 as LightThemeIcon } from '@mui/icons-material';
import { useContext, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TaskContext } from '@/context/TaskContext';
import { Task } from '@/types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { orderBy, groupBy, setOrderBy, setGroupBy } = useContext(TaskContext);
  const [rotation, setRotation] = useState(0);

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
    setRotation(180);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setRotation(0);
  };

  return (
    <AppBar position="static" color="default" className='text-black bg-white h-20 pt-1 shadow-none'>
      <Toolbar>
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleMenuClick}
          className='h-6 p-3 navButton'
        >
          <FormatListBulletedIcon className='size-4'/>
          <span>
          &nbsp;&nbsp;Display&nbsp;&nbsp;
          </span>
          <KeyboardArrowDownIcon
            className='size-4'
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease-in-out' }}
          />
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
              className='w-28'
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
              className='w-28'
            >
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
            </Select>
          </MenuItem>
        </Menu>
        <div className='grow' />
        <IconButton color="inherit">
          {false ? <LightThemeIcon /> : <DarkThemeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

