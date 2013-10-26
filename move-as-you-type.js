var text = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."

function processText(t){
  var processedText = ""
  for(var x=0; x<t.length; x++){
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
  $('.content').animate({
    'marginLeft' : "-=29px"
  }, 50)
})
