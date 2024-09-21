import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const Contacts = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Contacts
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#616161' }}>N</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Natali Craig" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#d32f2f' }}>D</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Drew Cano" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#ffb300' }}>O</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Orlando Diggs" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#1976d2' }}>A</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Andi Lane" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#8e24aa' }}>K</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Kate Morrison" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#ff7043' }}>K</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Koray Okumus" />
        </ListItem>
      </List>
    </div>
  );
};

export default Contacts;
