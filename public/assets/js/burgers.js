$(function() {
    $(".change-devoured").on("click", function(event) {
        const id = $(this).data("id");
        console.log("Devoured button works!");
        const newDevoured = $(this).data("id");

        const newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("Changed sleep to", newDevouredState);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("Form button works");

        const newBurger = {
            burger_name: $("#newBurger").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created New Burger");
            location.reload();
        });
    });
});