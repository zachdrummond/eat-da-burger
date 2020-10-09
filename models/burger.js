const orm = require("../config/orm");

// Creates a Burger Model
const burger = {
    // A method that calls the orm's selectAll method
    all: function(callback) {
        orm.selectALL("burgers", function(result){
            callback(result);
        });
    },
    // A method that calls the orm's insertOne method
    create: function(value, callback){
        orm.insertOne("burgers", "burger_name", value, function(result){
            callback(result);
        });
    },
    // A method that calls the orm's updateOne method
    update: function(id, callback){
        orm.updateOne("burgers", "devoured", 1, id, function(result){
            callback(result);
        });
    },
    // A method that calls the orm's deleteOne method
    delete: function(id, callback){
        orm.deleteOne("burgers", id, function(result){
            callback(result);
        });
    }
};

module.exports = burger;