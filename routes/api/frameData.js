const router = require("express").Router();
const frameDataController = require("../../controllers/frameDataController");

router.route('/:character')
    .get(frameDataController.getFrameData);

module.exports = router;
