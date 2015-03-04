$(document).ready(function() {
  $("#new_item").on("submit", function(e) {
    e.preventDefault();

    var form = $(this);
    $.ajax({
      "url": form.attr('action'),
      "method": form.attr('method'),
      "data": form.serialize(),
      "success": function(response) {
        $("#todo-list").append(response);
        form[0].reset();
      }
    })
  });
});
