import React from 'react';
import { Grid, Box } from '@mui/material';
import Widget from './Widget';
import ProjectionsChart from './ProjectionsChart';
import RevenueChart from './RevenueChart';
import RevenueByLocation from './RevenueByLocation';
import TopSellingProducts from './TopSellingProducts';
import TotalSales from './TotalSales'; 

const Dashboard = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '16px' }}>
      <Grid item xs={12} md={5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Widget title="Customers" value="3,781" change="+11.01%" positive={true} backgroundColor="#E3F2FD" />
          </Grid>
          <Grid item xs={6}>
            <Widget title="Orders" value="1,219" change="-0.03%" positive={false} backgroundColor="#E3F2FD" />
          </Grid>
          <Grid item xs={6}>
            <Widget title="Revenue" value="$695" change="+15.03%" positive={true} backgroundColor="#fff" />
          </Grid>
          <Grid item xs={6}>
            <Widget title="Growth" value="30.1%" change="+6.08%" positive={true} backgroundColor="#fff" />
          </Grid>
        </Grid>
      </Grid>

      {/* Projections vs Actuals: Bar Chart */}
      <Grid item xs={12} md={7}>
        <ProjectionsChart />
      </Grid>

      {/* Second Row: Revenue Line Chart (80%) and Revenue by Location (20%) */}
      <Grid container item spacing={2} xs={12}>
        <Grid item xs={12} md={8}>
          <Box sx={{ height: '100%' }}>
            <RevenueChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ height: '100%' }}>
            <RevenueByLocation />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} item xs={12}>
        <Grid item xs={12} md={8}>
          <Box sx={{ paddingRight: 2 }}>
            <TopSellingProducts />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ paddingLeft: 2 }}>
            <TotalSales />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
