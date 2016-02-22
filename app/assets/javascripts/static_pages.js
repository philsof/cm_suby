// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(window).load(function() {
  $("#container1").twentytwenty();
});

$(window).load(function() {
  $("#container2").twentytwenty();
});

$(window).load(function() {
  $('#contact-form').on('submit', function(e){
    var url = $(this).attr('href');
    console.log(url);
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: url,
      data: $(this).serialize()
    })
    .done(function(response){
      console.log("got into done")
      console.log(response)
    })
    .fail(function(response){
      console.log("got into fail")
    });

     // swal({   title: "Error!",   text: "Here's my error message!",   type: "error",   confirmButtonText: "Cool" });

  })
   
});