import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import {
  Dashboard as DashboardIcon,
  ExpandLess,
  ExpandMore,
  AccountCircle as AccountCircleIcon,
  Business as BusinessIcon,
  Book as BookIcon,
  Person as PersonIcon,
  Layers as LayersIcon,
  Folder as FolderIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const { darkMode } = useThemeContext();

  const handleUserProfileClick = () => {
    setOpenUserProfile(!openUserProfile);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: darkMode ? '#1e1e1e' : '#f9fafc', // Background changes based on darkMode
          color: darkMode ? '#fff' : '#333', // Text color changes based on darkMode
          borderRight: '1px solid #e0e0e0',
          top: '64px', // Offset for the TopBar height
        },
      }}
    >
      <Box sx={{ padding: '20px' }}>
        <List>
          {/* Favorites Section */}
          <Typography variant="body2" sx={{ color: darkMode ? '#9e9e9e' : '#333', fontWeight: 500, mb: 1 }}>
            Favorites
          </Typography>
          <ListItem sx={{ pl: 2 }}>
            <ListItemText primary="Overview" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
          <ListItem sx={{ pl: 2 }}>
            <ListItemText primary="Projects" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>

          {/* Dashboards Section */}
          <Typography variant="body2" sx={{ color: darkMode ? '#9e9e9e' : '#333', fontWeight: 500, mt: 2, mb: 1 }}>
            Dashboards
          </Typography>
          <ListItem button component={Link} to="/">  {/* Link to the Dashboard */}
            <ListItemIcon>
              <DashboardIcon sx={{ color: darkMode ? '#fff' : '#333' }} />  {/* Icon color based on darkMode */}
            </ListItemIcon>
            <ListItemText primary="Default" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>

          {/* Link to Order List */}
          <ListItem button component={Link} to="/orders">  {/* Link to the Order List */}
            <ListItemIcon>
              <DashboardIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Order List" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LayersIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="eCommerce" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FolderIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Projects" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Online Courses" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>

          {/* Pages Section */}
          <Typography variant="body2" sx={{ color: darkMode ? '#9e9e9e' : '#333', fontWeight: 500, mt: 2, mb: 1 }}>
            Pages
          </Typography>

          {/* User Profile with Collapse */}
          <ListItem button onClick={handleUserProfileClick}>
            <ListItemIcon>
              <PersonIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="User Profile" sx={{ color: darkMode ? '#fff' : '#333' }} />
            {openUserProfile ? <ExpandLess sx={{ color: darkMode ? '#fff' : '#333' }} /> : <ExpandMore sx={{ color: darkMode ? '#fff' : '#333' }} />}
          </ListItem>
          <Collapse in={openUserProfile} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Overview" sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Projects" sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Campaigns" sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Documents" sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Followers" sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Other Pages */}
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Account" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Corporate" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Blog" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
            </ListItemIcon>
            <ListItemText primary="Social" sx={{ color: darkMode ? '#fff' : '#333' }} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
