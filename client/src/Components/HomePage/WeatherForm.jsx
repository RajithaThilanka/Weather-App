import React from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { getWeather } from '../../api/userRequests';

export default function WeatherForm() {
  const [location, setLocation] = useState('');
  const [Weatherdata, setWeatherData] = useState(null);
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(location);
  getWeather(location)
    .then((response) => {
      console.log(response.data);
      setWeatherData(response.data);
      console.log(Weatherdata);
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
            <Button variant="contained"  onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
              <Stack direction="column">
                  <Typography>Longitude : {Weatherdata.weather.coord.lon}</Typography>
                  <Typography>Latitude : {Weatherdata.weather.coord.lat}</Typography>
                  <Typography>Name : {Weatherdata.name}</Typography>
                  <Typography>Base : {Weatherdata.weather.weather.main}</Typography>
                  <Typography>Clouds : {Weatherdata.weather.clouds.all}</Typography>
                  <Typography>Main: {Weatherdata.name}</Typography>
                  <Typography>Description : {Weatherdata.name}</Typography>
                  <Typography>Wind : {Weatherdata.name}</Typography>
                  <Typography>Name : {Weatherdata.name}</Typography>
                  <Typography>Name : {Weatherdata.name}</Typography>
              </Stack>


            </Stack>
            <Stack direction="column" spacing={2}>
              
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}