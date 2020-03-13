const connection = require('../config/connection.js');

const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, result) {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, whatToInsert, cb) {
        let queryString = 'INSERT INTO ?? SET ? ';
        connection.query(queryString, [table, whatToInsert], function(err, result) {
            if(err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = 'UPDATE ?? SET ? WHERE ?';
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }

}

module.exports = orm;