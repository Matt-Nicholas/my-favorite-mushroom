$(document).ready(function(){
  $("button#light").click(function() {
    $("body") .removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body") .removeClass();
    $("body").addClass("dark-background");
  });
  $(".click-chanterelle").click(function(){
    $("#chanterelle-showing").slideToggle();
  });
  $(".click-morel").click(function(){
    $("#morel-showing").slideToggle();
  });
  $(".click-chicken").click(function(){
    $("#chicken-showing").slideToggle();
  });
  $(".click-false-morel").click(function(){
    $("#false-morel-showing").slideToggle();
  });
});
