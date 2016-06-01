// Added event listener to fieldset so when user clicks it shows an arrow for their direction
var toggleID =
    document.getElementById("randomArrow").addEventListener("click", toggleClass);

// Created variables to access DOM elements by className to change classes so two arrows wouldn't show up at the same time
var showLeft = document.getElementById("leftArrow");
var showRight = document.getElementById("rightArrow");

// Created function to choose which arrow to show. Used Math.random to pick direction randomly and then used an if/else statement to show the arrow accordingly. If the number was under .50 the left arrow would show - the display was set to none on both the left and right class names, when the left side is shown, the showRight.className will switch the right class to display none so only the left arrow shows while the right arrow stays hidden.
function toggleClass(el) {
  var random = Math.random();
  console.log(random);
  if(random <= 0.49){
    showLeft.className = "SHOWYOURSELFLEFT";
    showRight.className = "right";
    // console.log("",showLeft.className );
    // console.log("left:",el );
  } else {
    showRight.className = "SHOWYOURSELFRIGHT";
    showLeft.className = "left";
    // console.log("", showRight.className );
    // console.log("right:",el );
  }
}


