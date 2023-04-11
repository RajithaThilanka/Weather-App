const axios = require('axios');

//Geo API
 const getGeo = (location) => { 
 return new Promise((resolve, reject) => {
  const locationurl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid=acaf38741d0d59677a3486bd3114bfde'   
   axios.get(locationurl)
      .then(function (response) {
          resolve({
              name:response.data[0].name,
              lat:response.data[0].lat,
              lon:response.data[0].lon
          })
          
   })
       .catch(function (error) {
           reject({ error:'unable to find Location'})
   })
 });
    
 }

module.exports=getGeo