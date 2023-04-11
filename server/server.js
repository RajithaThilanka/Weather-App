const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const port = process.env.PORT;

//use log middleware
//first check middleware
//app.use(log);

//use morgon middleware
//app.use(morgan('tiny'));


// check if DATABASE environment variable is defined
// if (!process.env.DATABASE) {
//   console.log('DATABASE environment variable is not defined');
//   process.exit(1);
// }

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true
//   })
//   .then(() => console.log('DB Connection Successful'))
//   .catch((err) => console.error('Error connecting to database:', err));

app.get("/api", (req, res) => {
  res.send();
});

app.get("/api/weather", (req, res) => {
  if (!req.query.address) { 
    res.send({error:"Address not found"});
    //call inhere
    geo(req.query.address)
      .then((data) => {
        return weather(data.lat, data.lon);
      })
      .then((data) = {
        res.send(data);
      })
      .catch((error) = {
        res.send(error);
      })
  }
  
});   
app.get("/*", (req, res) => {
  res.send("page not found");
});







//app.listen(port,() => console.log(`App is running on port ${port}`));
const server = app.listen(port, () => {
  console.log('Listening to port ' + port);
});