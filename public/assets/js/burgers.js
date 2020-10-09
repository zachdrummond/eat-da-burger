// Waits for the DOM to load
$(function () {
    // Event Listener - Devoured/Delete Button
    $(".change-devoured").on("click", function (event) {
    // Grabs the id and devoured boolean from the burger database
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");

    // Conditional - Specifies which AJAX call to make
    if (!devoured) {
      const newDevouredState = {
        devoured: true,
      };

      // Calls the server to update the database from "Burgers to Eat" to "Devoured"
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState,
      }).then(function () {
        location.reload();
      });
    } else if (devoured) {
      // Calls the server to delete the burger from the database
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(function () {
        location.reload();
      });
    }
  });

  // Event Listener - Add a Burger Button
  $(".create").on("submit", function (event) {
    event.preventDefault();

    // Grabs the user's name for the new burger
    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
    };

    // Conditional - Burger Name can't be empty
    if (newBurger.burger_name !== "") {
      // Calls the server to add the burger to the database
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        location.reload();
      });
    }
  });
});
