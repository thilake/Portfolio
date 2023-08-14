$(document).ready(function() {
    $(".php-email-form").submit(function(e) {
      e.preventDefault();
  
      var form = $(this);
      var url = form.attr("action");
      var formData = form.serialize();
  
      $.ajax({
        type: "POST",
        url: url,
        data: formData,
        success: function(response) {
          var sentMessage = form.find(".sent-message");
          var errorMessage = form.find(".error-message");
          
          if (response === "OK") {
            sentMessage.addClass("show");
            errorMessage.removeClass("show");
            form[0].reset(); // Clear form fields
          } else {
            errorMessage.addClass("show");
            sentMessage.removeClass("show");
            errorMessage.html(response); // Display error message
          }
        },
        error: function(xhr, status, error) {
          console.log(xhr.responseText);
          errorMessage.addClass("show");
          errorMessage.html("An error occurred. Please try again later.");
        }
      });
    });
  });
  