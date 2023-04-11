// const axios=require('axios');

// const url='https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=acaf38741d0d59677a3486bd3114bfde'

// axios.get(url)
//   .then(function (response) {
//       console.log(response.data.current.temp);
//       console.log(response.data.current.weather[0].description);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })


// //Geo API
// const locationurl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid=acaf38741d0d59677a3486bd3114bfde'
// const location = 'America'
// const getWeather = (lat, log) => { 
//     return new Promise((resolve, reject) => {
        
//   axios.get(locationurl)
//       .then(function (response) {
//           resolve({weather:'response.data[0].name)'})
    
//   })
//       .catch(function (error) {
//           reject({ error:'unable to find Location'})
//   })
// });
    
// }

// module.exports=getWeather