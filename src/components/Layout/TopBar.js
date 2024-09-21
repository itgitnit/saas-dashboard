import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useThemeContext } from '../../context/ThemeContext'; // Use theme context

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const TopBar = () => {
  const { darkMode, toggleTheme } = useThemeContext(); // Get darkMode and toggleTheme from context

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: darkMode ? '#1e1e1e' : '#fff',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 24px',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#333' }}>
            ByeWind
          </Typography>
          <IconButton aria-label="star" sx={{ color: darkMode ? '#fff' : '#333' }}>
            <SearchIcon />
          </IconButton>
          <Typography variant="body2" sx={{ color: darkMode ? '#fff' : '#333' }}>
            Dashboards / Default
          </Typography>
        </Box>

        {/* Center - Search Bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        {/* Right Section - Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton aria-label="toggle theme" onClick={toggleTheme}>
            {darkMode ? <Brightness7Icon sx={{ color: '#fff' }} /> : <Brightness4Icon sx={{ color: '#333' }} />}
          </IconButton>
          <IconButton aria-label="notifications">
            <NotificationsNoneIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
          </IconButton>
          <IconButton aria-label="profile">
            <PersonOutlineIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
