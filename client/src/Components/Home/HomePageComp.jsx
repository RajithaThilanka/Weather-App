import React from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { getWeather } from '../../api/userRequests';

export default function WeatherForm() {
  const [location, setLocation] = useState('');
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather(location)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Box
        style={{ backgroundColor: 'white' }}
        sx={{ border: 1, width: '500px', height: '600px', boxShadow: 3, borderRadius: 2 }}
      >
        <Stack direction="column" spacing={3} marginTop={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5">Realtime Weather Detection System</Typography>
          <Stack direction="row" spacing={2}>
            <TextField label="Enter Location" variant="outlined" value={location} onChange={handleLocationChange} />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
