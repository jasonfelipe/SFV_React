const router = require("express").Router();
const frameDataController = require("../../controllers/frameDataController");

router.route('/:character')
    .get(frameDataController.getFrameData);

router.route('/test')
    .get(frameDataController.test)

module.exports = router;
