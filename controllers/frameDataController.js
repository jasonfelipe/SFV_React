const db = require('../models/');

module.exports = {
    getFrameData: function(req,res){
        console.log(req.params.character);

        let character = req.params.character

        console.log("Going to back end.");
        db[character].findAll({}).then(dbModel => {
            res.send(dbModel)
        }).catch(err => res.status(422).json(err));
    },
    test: function (req, res){
        console.log('test complete lol')
    }
}