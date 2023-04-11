const axios = require('axios');

const getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,daily&appid=acaf38741d0d59677a3486bd3114bfde'
        axios.get(url)
            .then(function (response) {
                 resolve(response.data)
            })
            .catch(function (error) {
                reject({ error: "Unable to get weather" });
    
            });
    });
}

module.exports=getWeather