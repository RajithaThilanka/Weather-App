const weather = require('../controllers/Weathercontroller');
const geo = require('../controllers/geography');

class userControllers { 

    static getWeather(req, res) { 

     if (!req.body || !req.body.location) {
        return res.status(400).send({ error: 'Location is not set' });
    }
  // geo('London')
    const location = req.body.location;
    geo(location)
    .then((data) => {
        return weather(data.lat, data.lon);
    })
    .then((data) => { 
        res.send(data);
    })
    .catch((error) => { 
        console.log(error);
    })
    }

}
module.exports = userControllers;

