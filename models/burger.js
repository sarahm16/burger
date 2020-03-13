const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        })
    },
    create: function(whatToInsert, cb) {
        orm.insertOne('burgers', whatToInsert, function(res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;