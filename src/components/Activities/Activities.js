import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Activities = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Activities
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#43a047' }}>
              <BugReportIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="You have a bug that needs fixing" secondary="Just now" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#ff5722' }}>
              <AssignmentTurnedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Released a new version" secondary="59 minutes ago" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#ff7043' }}>
              <ErrorIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Submitted a bug" secondary="12 hours ago" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#2196f3' }}>
              <CheckCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Modified A data in Page X" secondary="Today, 11:59 AM" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#d32f2f' }}>
              <DeleteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Deleted a page in Project X" secondary="Feb 2, 2023" />
        </ListItem>
      </List>
    </div>
  );
};

export default Activities;
