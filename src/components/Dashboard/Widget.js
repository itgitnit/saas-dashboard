import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Widget = ({ title, value, change, positive }) => {
  return (
    <Card sx={{
        borderRadius: 2,
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        minHeight: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: positive ? '#E3F2FD' : '#ffffff' // Light blue background for positive change, white for negative or neutral
    }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: positive ? 'green' : 'red' }}>
          {positive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          <Typography variant="body1" sx={{ ml: 0.5 }}>
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Widget;
