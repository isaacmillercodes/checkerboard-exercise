//random colors

$(document).ready(function(){

  for (var i = 0; i < 63; i++) {
    var div = document.createElement('div');{
      div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      div.style.width = "11.1%";
      div.style.float = "left";
      div.style.paddingBottom = "11.1%";
    }
    document.body.appendChild(div)
  }

});
