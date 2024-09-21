import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Typography, Box } from '@mui/material';

// Sample data for Projections vs Actuals
const data = [
  { name: 'Jan', actual: 10, projection: 15 },
  { name: 'Feb', actual: 20, projection: 25 },
  { name: 'Mar', actual: 15, projection: 20 },
  { name: 'Apr', actual: 25, projection: 30 },
  { name: 'May', actual: 12, projection: 20 },
  { name: 'Jun', actual: 22, projection: 28 },
];

const ProjectionsChart = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f9fafc', borderRadius: '8px' }}>
      {/* Chart Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Projections vs Actuals
      </Typography>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barSize={30} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Projections Bar */}
          <Bar dataKey="projection" fill="#d0e2ff" radius={[10, 10, 0, 0]} />
          {/* Actuals Bar */}
          <Bar dataKey="actual" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ProjectionsChart;
