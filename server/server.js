const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT;
const bodyParser = require('body-parser');
const weather = require('./routes/weatherRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', weather);



app.get("/*", (req, res) => {
  res.send("page not found");
});




//app.listen(port,() => console.log(`App is running on port ${port}`));
const server = app.listen(port, () => {
  console.log('Listening to port ' + port);
});