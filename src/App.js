import React from 'react';
import { ThemeContextProvider } from './context/ThemeContext'; // Import the ThemeContextProvider
import DashboardPage from './pages/DashboardPage'; // Main Dashboard Page

const App = () => {
  return (
    <ThemeContextProvider>
      <DashboardPage />
    </ThemeContextProvider>
  );
};

export default App;
