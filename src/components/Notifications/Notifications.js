import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useThemeContext } from '../../context/ThemeContext';

const Notifications = () => {
  const { isDarkMode } = useThemeContext(); 

  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ color: isDarkMode ? '#fff' : '#333' }}>
        Notifications
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: isDarkMode ? '#1e88e5' : '#1976d2' }}>
              <BugReportIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="You have a bug that needs fixing" secondary="Just now" sx={{ color: isDarkMode ? '#fff' : '#333' }} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: isDarkMode ? '#43a047' : '#43a047' }}>
              <PersonAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New user registered" secondary="59 minutes ago" sx={{ color: isDarkMode ? '#fff' : '#333' }} />
        </ListItem>
      </List>
    </div>
  );
};

export default Notifications;
