// Your JS goes here

for (var i = 0; i < 64; i++) {
  var div = document.createElement('div');
  if (i % 2 === 0) {
    div.style.backgroundColor = "red";
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
  } else {
    div.style.backgroundColor = "black";
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
  }
  document.body.appendChild(div)
}
