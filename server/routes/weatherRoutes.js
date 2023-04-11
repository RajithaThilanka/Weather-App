const express=require('express')
const router = express.Router();
const weather = require('../controllers/Weathercontroller');
const geo = require('../controllers/geography');

router.route('api/weather').get(Loaction);

// geo('Gampaha')
//     .then((data) => {
//         //console.log(data);
//         return weather(data.lat, data.lon);
//     })
//     .then((data) => { 
//         console.log(data);
//     })
//     .catch((error) => { 
//         console.log(error);
//     })