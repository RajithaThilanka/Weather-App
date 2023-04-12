import React from 'react'
import {Box,Stack, Typography,TextField,Button,Autocomplete  }from '@mui/material';
import { useState } from 'react';


export default function () {

  const locationSuggestions = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia'];
  const [value, setValue] = useState('');
  const handleInputChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <Box style={{ backgroundColor: 'white' }} sx={{ border: 1, width: "500px", height: "600px",boxShadow: 3,borderRadius:2 }}>
        
        <Stack direction="column" spacing={3}  marginTop={3} sx={{alignItems:"center" ,justifyContent:"center"}}>
          <Typography variant="h5">
            Realtime Weather Detection System
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="Enter Location" variant="outlined" />
            <Button variant="contained">Submit</Button>
          </Stack>
      
        </Stack>
    </Box>
    </div>
  )
}
