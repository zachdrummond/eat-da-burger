const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(request, response){
    burger.all(function(data){
        //console.log(data);
        response.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function(request, response){
    console.log(request.body);

    burger.create(request.body.burger_name, function(result) {
        response.json({ id: result.insertId }); // Send back the id of the new burger
    });
});

module.exports = router;