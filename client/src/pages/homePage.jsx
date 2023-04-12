import React from 'react'
import DataFrorm from '../Components/Home/HomePageComp'
import Stack from '@mui/material/Stack';

export default function homePage() {
  return (
    <div style={{ backgroundColor: '#006064', height: '100vh' }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={5}
      >
        
      <DataFrorm/>
      </Stack>
      
    </div>
  )
}
