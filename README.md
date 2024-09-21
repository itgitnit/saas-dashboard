# SaaS Dashboard

This project is a SaaS Admin Dashboard built using **React**, **Material UI**, and **React Router**. It features a dashboard with widgets, data visualizations, and a customizable light/dark theme using a `ThemeContext`. Additionally, there is an **Order List** page with a paginated table, and more pages can be added seamlessly.

## Features

- **Light/Dark Theme** toggle using `Context API`
- **Responsive Layout** built with Material UI’s Grid system
- **Dynamic Sidebar** with navigation links using `react-router-dom`
- **Dashboard Widgets** that display key metrics (customers, orders, revenue, etc.)
- **Charts and Data Visualization** for projections, revenue, and top-selling products
- **Order List** page with paginated table for viewing orders
- **Notifications & Activities** panel on the dashboard

## Tech Stack

- **React**: Core library for building the UI.
- **Material UI (MUI)**: For responsive design, styling, and UI components.
- **React Router**: For client-side routing.
- **Recharts**: For displaying charts and graphs.
- **Context API**: For managing global states like the theme toggle (Light/Dark mode).

## Installation

To get the project running locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/itgitnit/saas-dashboard.git

2. **Navigate to the project folder**:
    ```bash
    cd saas-dashboard

3. **Install the dependencies**:
    ```bash
    npm install

4. **Start the development server**:
    ```bash
    npm start

## Routes
The app has two main routes:

**Default Dashboard (/)**: This is the main dashboard page displaying widgets, charts, and recent activity.
Accessed by default or by clicking Default in the sidebar.

**Order List (/orders)**: Displays a paginated list of orders with details such as order ID, user, project, and status. Accessed by clicking Order List in the sidebar.