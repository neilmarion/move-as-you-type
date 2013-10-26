var text = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
var index = 0;

function processText(t){
  var  processedText = ""
  processedText =  processedText + '<div class="char focused">'+ t[0] +'</div>'
  for(var x=1; x<t.length; x++){
    processedText = processedText + '<div class="char">'+ t[x] +'</div>'
  }
  return processedText
}

$(document).ready(function(){
  winWidth = $(document).width()
  margin = (winWidth/2) - 20
  $('.content').css({"margin-left": margin.toString() + "px"})
  $('.content').append(processText(text))
})

$(document).keypress(function(e){
  next = $('.focused').next()
  $('.focused').removeClass('focused')
  next.addClass('focused')
  $('.content').animate({
    'marginLeft' : "-=29px"
  }, 50)
})
