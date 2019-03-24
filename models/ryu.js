var Sequelize = require('sequelize');

//be sure to change this to connection. When connecting to Database
var sequelize = require('../config/connection.js');

var Ryu = sequelize.define("ryu", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,   
        autoIncrement: true
    },
    move: {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        } 
    },
    startup: {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    active:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    recovery:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    onHit:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    onBlock: {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    damage:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    stun:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    moveType: {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },   
    attackType:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    cancels:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    notes:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    gif:  {
        type: Sequelize.STRING,
        validate: {
            len: [1, 255]
        }
    },
    
},
{
 freezeTableName: true,
 tableName: 'ryu',
 timestamps: false
})
;

Ryu.sync();

module.exports = Ryu;