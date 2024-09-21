import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
  IconButton,
  TablePagination,
  Box,
  Paper,
  Chip,
  Avatar,
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// Sample data for orders
const orders = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', avatar: 'https://via.placeholder.com/150' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
  },
  {
    id: '#CM9802',
    user: { name: 'Kate Morrison', avatar: 'https://via.placeholder.com/150' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', avatar: 'https://via.placeholder.com/150' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
  },
  {
    id: '#CM9804',
    user: { name: 'Orlando Diggs', avatar: 'https://via.placeholder.com/150' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', avatar: 'https://via.placeholder.com/150' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
];

const statusColors = {
  'In Progress': 'primary',
  Complete: 'success',
  Pending: 'warning',
  Approved: 'info',
  Rejected: 'error',
};

const OrderList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
        Order List
      </Typography>

      <Paper elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <TableRow key={order.id}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={order.user.avatar}
                          alt={order.user.name}
                          sx={{ marginRight: '8px' }}
                        />
                        {order.user.name}
                      </Box>
                    </TableCell>
                    <TableCell>{order.project}</TableCell>
                    <TableCell>{order.address}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        color={statusColors[order.status]}
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={orders.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
        />
      </Paper>
    </Box>
  );
};

export default OrderList;
