const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, result) {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = 'INSERT INTO ?? SET ? = ?';
        connection.query(queryString, [table, cols, vals], function(err) {
            if(err) throw err;
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = 'UPDATE ?? SET ? = ? WHERE ? = ?';
        connection.query(queryString, [table, objColVals, condition], function(err) {
            if(err) throw err;
        })
    }

}

module.exports = orm;