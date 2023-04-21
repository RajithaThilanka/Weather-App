const axios = require('axios');

exports.getWeather = async (req, res, next) => {
  try {
    const { location } = req.params;
    if (!location) {
      return res.status(400).send({ error: 'Location is not set' });
    }
    
    const locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=acaf38741d0d59677a3486bd3114bfde`;
    const locationRes = await axios.get(locationUrl);
    const { name, lat, lon } = locationRes.data[0];
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=acaf38741d0d59677a3486bd3114bfde`;
    const weatherRes = await axios.get(url);
    
    return res.json({
      name,
      weather: weatherRes.data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'Server Error' });
  }
};
