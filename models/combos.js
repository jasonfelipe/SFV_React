var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Combos = sequelize.define("combos", {
    character: Sequelize.STRING,
    movelist: Sequelize.STRING,
    damage: Sequelize.STRING
},
{
 freezeTableName: true,
 tableName: 'combos',
 timestamps: false
});

Combos.sync();

module.exports = Combos;