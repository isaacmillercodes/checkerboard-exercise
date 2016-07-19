//gradient color

$(document).ready(function(){

  for (var i = 0; i < 63; i++) {
    var div = document.createElement('div');
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    div.style.background = 'linear-gradient(to bottom right, rgba(255,0,0,0), rgba(255,0,0,1))';
    if (i % 2 === 0) {
      div.style.backgroundColor = 'rgba(0,0,255,1)';
    } else {
      div.style.backgroundColor = 'rgba(255,0,0,0)';
    }
    document.body.appendChild(div);
  }

});
