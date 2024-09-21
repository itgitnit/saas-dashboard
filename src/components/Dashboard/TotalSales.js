import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Direct', value: 300.56, color: '#000000' }, // Black
  { name: 'Affiliate', value: 135.18, color: '#98ee99' }, // Light Green
  { name: 'Sponsored', value: 154.02, color: '#8884d8' }, // Light Blue
  { name: 'E-mail', value: 48.96, color: '#8dd1e1' }, // Light Purple
];

const COLORS = data.map((entry) => entry.color);

const TotalSales = () => {
  // Calculate total sales for the percentage calculation
  const totalSales = data.reduce((acc, entry) => acc + entry.value, 0);
  const percentage = ((data[0].value / totalSales) * 100).toFixed(1); // Direct sales percentage
  
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Total Sales
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={55}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <Box
            sx={{
              position: 'absolute',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {percentage}% 
          </Box>
        </Box>

        {/* Legend */}
        <Box sx={{ mt: 2 }}>
          {data.map((entry, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: entry.color,
                    borderRadius: '50%',
                    mr: 1,
                  }}
                />
                <Typography variant="body2">{entry.name}</Typography>
              </Box>
              <Typography variant="body2">${entry.value.toFixed(2)}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalSales;
