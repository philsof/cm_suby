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
    
    e.preventDefault();

    judge.validate(document.getElementById('contact_name'), {
  valid: function(element) {
    element.style.border = '1px solid green';
  },
  invalid: function(element, messages) {
    element.style.border = '1px solid red';
    alert(messages.join(','));
  }
});

      judge.validate(document.getElementById('contact_email'), {
  valid: function(element) {
    element.style.border = '1px solid green';
  },
  invalid: function(element, messages) {
    element.style.border = '1px solid red';
    alert(messages.join(','));
  }
});

        judge.validate(document.getElementById('contact_message'), {
  valid: function(element) {
    element.style.border = '1px solid green';
  },
  invalid: function(element, messages) {
    element.style.border = '1px solid red';
    alert(messages.join(','));
  }
});


    var url = $(this).attr('href');
    console.log(url);

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