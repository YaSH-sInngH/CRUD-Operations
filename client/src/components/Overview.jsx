import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, CircularProgress, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../service/api'; // Import your getUser API

const Overview = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch user data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUser();
                setUsers(response.data); // Assuming response.data is an array of users
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Calculate total users
    const totalUsers = users.length;

    // Calculate active users (assuming a "status" field exists)
    const activeUsers = users.filter(user => user.status === 'active').length;

    // Recent users (last 5 added)
    const recentUsers = users.slice(-5).reverse(); // Get the last 5 users and reverse to show most recent first

    return (
        <Box p={4}>
            {/* Welcome Message */}
            <Typography variant="h3" gutterBottom className='text-center'>
                Welcome to the User Management System
            </Typography>
            <Typography variant="body1" className='text-center'>
                This application allows you to manage user records efficiently. You can create new users, view existing ones, update their details, or delete them as needed.
            </Typography>

            {/* Quick Actions */}
            <Grid container spacing={3} justifyContent="center"  mt={3}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => navigate('/add')}>
                        Add New User
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary" onClick={() => navigate('/list')}>
                        View All Users
                    </Button>
                </Grid>
            </Grid>

            {/* Statistics Cards */}
            {loading ? (
                <Box mt={4} display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={3} mt={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Total Users
                                </Typography>
                                <Typography variant="h3">
                                    {totalUsers}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Active Users
                                </Typography>
                                <Typography variant="h3">
                                    {activeUsers}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}

            {/* Recent Activity */}
            <Typography variant="h5" mt={4} gutterBottom>
                Recent Activity
            </Typography>
            {loading ? (
                <Box display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Date Added</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {recentUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{new Date(user.dateAdded).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Footer */}
            <Box mt={5} py={3} color="white" textAlign="center" className='bg-customBlue'>
                <Typography className='text-white text-2xl'>
                    © 2023 User Management System. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Overview;