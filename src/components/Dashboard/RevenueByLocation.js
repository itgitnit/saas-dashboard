import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import MapImage from '../../assets/Map.png';

const locations = [
  { city: 'New York', revenue: '72K' },
  { city: 'San Francisco', revenue: '39K' },
  { city: 'Sydney', revenue: '25K' },
  { city: 'Singapore', revenue: '61K' },
];

const RevenueByLocation = () => (
  <Card sx={{ borderRadius: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Revenue by Location
      </Typography>

      {/* Display the map image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img src={MapImage} alt="Map showing locations" style={{ width: '100%', maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      </Box>

      {/* List of locations with revenue */}
      <List>
        {locations.map((location) => (
          <ListItem key={location.city} disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={location.city} />
            <Typography variant="body2" color="textSecondary">{location.revenue}</Typography>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default RevenueByLocation;
