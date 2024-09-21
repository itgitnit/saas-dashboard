import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

const data = [
  { name: 'Jan', current: 10000, previous: 9000 },
  { name: 'Feb', current: 12000, previous: 10000 },
  { name: 'Mar', current: 8000, previous: 9500 },
  { name: 'Apr', current: 14000, previous: 12500 },
  { name: 'May', current: 13000, previous: 12000 },
  { name: 'Jun', current: 16000, previous: 15000 },
];

const RevenueChart = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f9fafc', borderRadius: '8px' }}>
      {/* Chart Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Revenue
      </Typography>

      {/* Revenue Legend */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, marginBottom: 2 }}>
        <Typography variant="body2">
          <span style={{ color: '#000', fontWeight: 'bold' }}>• Current Week </span> $58,211
        </Typography>
        <Typography variant="body2">
          <span style={{ color: '#82ca9d', fontWeight: 'bold' }}>• Previous Week </span> $68,768
        </Typography>
      </Box>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="current" stroke="#000000" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="previous" stroke="#82ca9d" strokeDasharray="5 5" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RevenueChart;
