const router = require("express").Router();
const combosController = require("../../controllers/combosController");

router.route('/:character')
    .get(combosController.getCombos)
    .post(combosController.saveCombos);

router.route('/test')
    .get(combosController.test)

module.exports = router;