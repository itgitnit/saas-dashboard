import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const products = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

const TopSellingProducts = () => (
  <TableContainer component={Paper} sx={{ borderRadius: 2, padding: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', paddingBottom: 2 }}>
      Top Selling Products
    </Typography>
    <Table sx={{ minWidth: 650 }}>
      {/* Table Header */}
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: 'gray', fontWeight: 'bold' }}>Name</TableCell>
          <TableCell sx={{ color: 'gray', fontWeight: 'bold' }}>Price</TableCell>
          <TableCell sx={{ color: 'gray', fontWeight: 'bold' }}>Quantity</TableCell>
          <TableCell sx={{ color: 'gray', fontWeight: 'bold' }}>Amount</TableCell>
        </TableRow>
      </TableHead>
      
      {/* Table Body */}
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TopSellingProducts;
