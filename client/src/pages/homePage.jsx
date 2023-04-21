import React from 'react';
import DataForm from '../Components/HomePage/WeatherForm';
import { Stack, Grid } from '@mui/material';
import AppBarComp from '../Components/Navbar/Appbar';


export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#006064', height: '100vh' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <DataForm />
        </Grid>
    </Grid>
    </div>
  );
}
