const express = require('express');
const router = express.Router();
const userController=require("../controllers/userControllers")

router
    .route('/getWeather')
    .get(userController.getWeather);
module.exports = router;
