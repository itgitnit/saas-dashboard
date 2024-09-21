import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import Sidebar from '../components/Layout/Sidebar';
import TopBar from '../components/Layout/TopBar';
import Notifications from '../components/Notifications/Notifications';
import Activities from '../components/Activities/Activities';
import Contacts from '../components/Contacts/Contacts';
import Dashboard from '../components/Dashboard/Dashboard';
import OrderList from '../components/OrderList/OrderList'; 
import { useThemeContext } from '../context/ThemeContext';

const DashboardPage = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <Router>
      <TopBar />
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          paddingTop: '64px',
          backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',  // Dark/Light background
        }}
      >
        {/* Left Sidebar */}
        <Box
          component="nav"
          sx={{
            width: '240px',
            flexShrink: 0,
            position: 'fixed',
            top: '64px', // Sidebar starts after TopBar
            height: 'calc(100vh - 64px)', // Sidebar occupies the remaining height after TopBar
            overflowY: 'auto',
            borderRight: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',  // Adjust for theme
          }}
        >
          <Sidebar />
        </Box>

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: '240px',
            padding: '16px',
            backgroundColor: isDarkMode ? '#181818' : '#fff',  // Dark/Light background
            color: isDarkMode ? '#fff' : '#333',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </Box>

        {/* Notifications, Activities, and Contacts */}
        <Routes >
          <Route
            path="/"
            element={
              <Box
                sx={{
                  width: '300px',
                  flexShrink: 0,
                  marginLeft: 'auto',
                  padding: '16px',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',  // Adjust for theme
                  borderLeft: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
                }}
              >
                <Notifications />
                <Activities />
                <Contacts />
              </Box>
            }
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default DashboardPage;
