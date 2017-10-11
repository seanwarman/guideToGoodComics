$("document").ready(function()	{

  var windowLoadSize = $(window).width();

  hideMenu = function() {
    if (windowLoadSize < 760) {
      $(".holder").hide();
      $(".holder").css({"top": "13%"});
    } else {
      $(".holder").show();

    }
  }


  addRemoveButton = function()  {
    if (windowLoadSize < 760) {
      $(".menuButton").remove();
      var whereToPut = ($(".titleBar").children().first("a"));
      $(whereToPut).before("<button class='menuButton'><span class='glyphicon icon'></span></button");
    } else {
      $(".menuButton").remove();
    }
  }

  hideMenu();

  addRemoveButton();

  $(window).resize(function() {

    windowLoadSize = $(window).width();
    hideMenu();
    addRemoveButton();
    $(".article").removeClass("moveForMenu");
     
    
  })



$(document).on("click", ".menuButton", function() {
  var element = $(".moveForMenu");
  console.log(element.length);
  if  (element.length !== 1)  {
    $(".article").addClass("moveForMenu");
    $(".holder").show(); 
  } else if (element.length === 1)  {
    $(".article").removeClass("moveForMenu");
    $(".holder").hide(); 
  }
 

  


}); 



    if ($(this).scrollTop() > 80) {
      $('.holder').css({'position': 'fixed', 'top': '0px'}); 
      $('ul').css({'height': '100%'});
      addRemoveButton();
    }
 
	$(window).scroll(function(e){ 
  var $el = $('.holder'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 80 && !isPositionFixed && windowLoadSize > 760){ 
    $('.holder').css({'position': 'fixed', 'top': '0px'}); 
    $('ul').css({'height': '100%'});
    addRemoveButton();
  }
  if ($(this).scrollTop() < 80 && isPositionFixed && windowLoadSize > 760)
  {
    $('.holder').css({'position': 'static', 'top': '0px'}); 
    $('ul').css({'height': '100%'});
    addRemoveButton();
  } 
 
});

});