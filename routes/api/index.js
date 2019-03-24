const router = require("express").Router();
const frameDataRoutes = require('./frameData');

router.use('/framedata', frameDataRoutes);


module.exports = router;
