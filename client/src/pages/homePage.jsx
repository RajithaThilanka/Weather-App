import React from 'react';
import DataForm from '../Components/Home/HomePageComp';
import { Stack, Grid } from '@mui/material';
import AppBarComp from '../Components/Home/Navbar/AppBarComp';

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#006064', height: '100vh' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <AppBarComp/> 
        </Grid>
        <Grid item xs={12}>
          <DataForm/>
        </Grid>
      </Grid>
    </div>
  );
}
