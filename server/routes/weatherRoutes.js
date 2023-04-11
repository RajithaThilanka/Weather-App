const express = require('express');
const router = express.Router();
const userController=require("../controllers/userControllers")

router.get('/getWeather', userController.getWeather);

module.exports = router;
