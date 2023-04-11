const express = require('express');
const router = express.Router();
const userController=require("../controllers/userControllers")

router.get('/getUser', userController.getUser);
router.get('/getWeather', userController.getWeather);

module.exports = router;
