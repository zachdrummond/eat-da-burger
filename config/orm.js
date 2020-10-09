const connection = require("../config/connection.js");

const orm = {
    selectALL: function(table, callback){
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [table], function(error, result){
            if(error) throw error;
            callback(result);
        })
    },
    insertOne: function(table, col, val, callback){
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(error, result){
            if(error) throw error;
            callback(result);
        });
    },
    updateOne: function(table, col, val, id, callback){
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, col, val, id], function(error, result){
            if(error) throw error;
            callback(result);
        });
    },
    deleteOne: function(table, id, callback){
        const queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [table, id], function(error, result){
            if(error) throw error;
            callback(result);
        });
    }
}

module.exports = orm;