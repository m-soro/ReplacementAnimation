let imgArray = [];
for (i = 0; i < 24; i++) {
  imgArray[i] = new Image();
  imgArray[i].src = "images/ball" + i + ".gif";
}
// this is the current picture it starts at zero
let counter = 0;
// this the fcuntion that will rotate the ball
function rotate() {
  // if the counter variable is greater than imageArray length meaning have run through the range of pics
  if (counter > imgArray.length - 1) counter = 0;
  // set it to the next picture
  document.getElementById("ball").src = imgArray[counter].src;
  // increment the counter by 1 each time
  counter++;
  // call the setTimeout and call the rotate function
  setTimeout("rotate()", 50);
}
// This will fire after everything is loaded in the page
window.addEventListener("load", rotate);
