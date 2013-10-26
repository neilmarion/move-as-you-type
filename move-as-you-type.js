$(document).ready(function(){
  winWidth = $(document).width()
  margin = (winWidth/2) - 20
  $('.content').css({"margin-left": margin.toString() + "px"})
})

$(document).keypress(function(e){
  $('.content').animate({
    'marginLeft' : "-=29px"
  }, 100)
})
