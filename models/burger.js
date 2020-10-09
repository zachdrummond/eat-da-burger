const orm = require("../config/orm");

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
    }
};

module.exports = burger;