const connection = require("../config/connection.js");

const orm = {
    selectALL: function(table, callback){
        const queryString = `SELECT * FROM ${table};`
        connection.query(queryString, function(error, result){
            if(error) throw error;
            callback(result);
        })
    },
    insertOne: function(table, col, val, callback){
        const queryString = `INSERT INTO ?? (??) VALUES (?)`;
        connection.query(queryString, [table, col, val], function(error, result){
            if(error) throw error;
            callback(result);
        });
    },
    updateOne: function(){

    }
}

module.exports = orm;