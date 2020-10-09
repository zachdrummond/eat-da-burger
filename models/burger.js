const orm = require("../config/orm");

// Creates a Burger Model
const burger = {
    all: function(callback) {
        orm.selectALL("burgers", function(result){
            callback(result);
        });
    },
    create: function(value, callback){
        orm.insertOne("burgers", "burger_name", value, function(result){
            callback(result);
        });
    },
    update: function(id, callback){
        orm.updateOne("burgers", "devoured", 1, id, function(result){
            callback(result);
        });
    },
    delete: function(id, callback){
        orm.deleteOne("burgers", id, function(result){
            callback(result);
        });
    }
};

module.exports = burger;