const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT;


const user = require('./routes/weatherRoutes');
app.use('/api', user);

// app.get("/api/weather", (req, res) => {
//   if (!req.query.address) { 
//     res.send({error:"Address not found"});
//     //call inhere
//     geo(req.query.address)
//       .then((data) => {
//         return weather(data.lat, data.lon);
//       })
//       .then((data) = {
//         res.send(data);
//       })
//       .catch((error) = {
//         res.send(error);
//       })
//   }
// });  
 
// app.get("/*", (req, res) => {
//   res.send("page not found");
// });




//app.listen(port,() => console.log(`App is running on port ${port}`));
const server = app.listen(port, () => {
  console.log('Listening to port ' + port);
});