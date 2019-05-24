const db = require('../models/');

module.exports = {
    getCombos: function(req,res){
        console.log(req.params.character);

        let character = req.params.character

        console.log("Going to back end.");
        db.Combos.findAll({
            where: {
                character: character
            }
        }).then(dbModel => {
            res.send(dbModel)
        }).catch(err => res.status(422).json(err));

        
        
    },    

    saveCombos: function(req, res){
        const data = req.body
        console.log("Hello the data?", data);
    
        db.Combos.create({
            character: data.character,
            combo: data.combo,
            damage: data.damage,
            hits: data.hits
        }).then(dbModel => {
            res.send(dbModel);
        }).catch(err => res.status(422).json(err));

    },
    test: function (req, res){
        console.log('test complete lol');
    }
}