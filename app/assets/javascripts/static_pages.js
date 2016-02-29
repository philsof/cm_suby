// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function() {

$(window).load(function() {
  $('#myslideshow1').smoothSlides();
});

$(window).load(function() {
  $("#container1").twentytwenty();
});

$(window).load(function() {
  $("#container2").twentytwenty();
});

$(window).load(function() {
  $("#container3").twentytwenty();
});

$(window).load(function() {
  $("#container4").twentytwenty();
});

$(window).load(function() {
  $("#container5").twentytwenty();
});

$(window).load(function() {
  $("#container6").twentytwenty();
});

$(window).load(function() {
  $("#container7").twentytwenty();
});

$(window).load(function() {
  $("#container8").twentytwenty();
});

  $('#new_contact').on('submit', function(event){
    event.preventDefault();
    var valid_count = 0;
    var url = $(this).attr('action');
    var that = $(this);

    judge.validate(document.getElementById('contact_name'), {
      valid: function(element) {
        valid_count += 1;
        element.style.border = '3px solid green';
      },
      invalid: function(element, messages) {
        element.style.border = '3px solid red';
      }
    });

    judge.validate(document.getElementById('contact_email'), {
      valid: function(element) {
        valid_count += 1;
        element.style.border = '3px solid green';
      },
      invalid: function(element, messages) {
        element.style.border = '3px solid red';
      }
    });

    judge.validate(document.getElementById('contact_message'), {
      valid: function(element) {
        valid_count += 1;
        element.style.border = '3px solid green';
      },
      invalid: function(element, messages) {
        element.style.border = '3px solid red';
      }
    });

    if (valid_count == 3){
      $.ajax({
        type: "POST",
        url: url,
        data: that.serialize()
      })
      .done(function(response){
        swal("Email sent!", "Your email has been successfully sent to cmsuby@gmail.com. We will respond promptly. Thank you!", "success");
      })
      .fail(function(response){
        swal("Oops...", "Something went wrong! Your email was not sent. Please try again or email cmsuby@gmail.com directly.", "error");
      });
    }
  });
});