const router = require("express").Router();
const frameDataRoutes = require('./frameData');
const comboDataRoutes = require('./comboData')

router.use('/framedata', frameDataRoutes);
router.use('/combos', comboDataRoutes);


module.exports = router;
