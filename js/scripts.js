$(document).ready(function(){
    $(".design").click(function() {
      $("#design, .design").toggle("slow");
    });
    $(".development").click(function() {
      $("#development, .development").toggle("slow");
    });
    $(".product design").click(function() {
      $("#product design, .product design").toggle("slow");
    });
    $('.work1').mouseover(function() {
      $('.work1').show();
    }).mouseout(function() {
      $('.work1').hide();
    });
    $(".work2").mouseenter(function() {
      $(".work2").show();
    }).mouseleave(function() {
      $(".work2").hide();
    });
    $(".work3").mouseenter(function() {
      $(".work3").show();
    }).mouseleave(function() {
      $(".work3").hide();
    });
    $(".work4").mouseenter(function() {
      $(".work4").show();
    }).mouseleave(function() {
      $(".work4").hide();
    });
    $(".work5").mouseenter(function() {
      $(".work5").show();
    }).mouseleave(function() {
      $(".work5").hide();
    });
    $(".work6").mouseenter(function() {
      $(".work6").show();
    }).mouseleave(function() {
      $(".work6").hide();
    });
    $(".work7").mouseenter(function() {
      $(".work7").show();
    }).mouseleave(function() {
      $(".work7").hide();
    });
    $(".work8").mouseenter(function() {
      $(".work8").show();
    }).mouseleave(function() {
      $(".work8").hide();
    });
$("form").submit(function(event){
    if($("input").val()===""){
        alert("enter a valid data")
    }
    else{
        alert("your message was received")
    }
    event.preventDefault();
});
  
