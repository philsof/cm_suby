// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .
//= require underscore
//= require json2
//= require judge

$(function(){ $(document).foundation();

// $('.single-item').slick({

//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         arrows: true


// });

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

$(window).load(function() {
  $('#myslideshow1').smoothSlides();
});




});



