const weather = require('../controllers/Weathercontroller');
const geo = require('../controllers/geography');


class userControllers { 
    static getUser(req, res) { 
       res.send({ 'msg': 'thi is users get details'});
    }

    static getWeather(req, res) { 
    geo('Gampaha')
    .then((data) => {
        //console.log(data);
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

