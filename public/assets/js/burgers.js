$(function () {
  $(".change-devoured").on("click", function (event) {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");

    if (!devoured) {
      const newDevouredState = {
        devoured: true,
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState,
      }).then(function () {
        location.reload();
      });
    } else if (devoured) {
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(function () {
        location.reload();
      });
    }
  });

  $(".create").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
    };
    if (newBurger.burger_name !== "") {
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        location.reload();
      });
    }
  });
});
