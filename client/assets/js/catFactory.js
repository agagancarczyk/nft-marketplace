//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function genColors() {
  var colors = [];
  for (var i = 10; i < 99; i++) {
    var color = getColor();
    colors[i] = color;
  }
  return colors;
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
  $(".cat__head, .cat__chest").css("background", "#" + color); //This changes the color of the cat
  $("#headcode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnabody").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function mouthAndBelly(color, code) {
  $(".cat__mouth-contour, .cat__tail, .cat__chest_inner").css("background", "#" + color);
  $("#mouthcode").html("code: " + code);
  $("#dnamouth").html(code);
}

function eyeColor(color, code) {
  $(".cat__eye")
    .find("span")
    .css("background", "#" + color);
  $("#eyecode").html("code: " + code);
  $("#dnaeyes").html(code);
}

function earsAndPaw(color, code) {
  $(".cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right,  .cat__paw-left_inner, .cat__paw-right_inner").css(
    "background",
    "#" + color
  );
  $("#earscode").html("code: " + code);
  $("#dnaears").html(code);
}

//Middle decoration color
function midColor(color, code) {
  $(".cat__head-dots").css("background", "#" + color);
  $("#midcode").html("code: " + code);
  $("#dnadecorationMid").html(code);
}

//Sides decoration color
function SidesColor(color, code) {
  $(".cat__head-dots_first").css("background", "#" + color);
  $(".cat__head-dots_second").css("background", "#" + color);
  $("#sidecode").html("code: " + code);
  $("#dnadecorationSides").html(code);
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {
  $("#dnashape").html(num);
  switch (num) {
    case 1:
      normalEyes();
      $("#eyeName").html("Basic"); // Set the badge to Basic
      break;
    case 2:
      normalEyes();
      $("#eyeName").html("Chill"); // Set the badge to Chill
      eyesType1();
      break;
    case 3:
      normalEyes();
      $("#eyeName").html("Up");
      eyesType2();
      break;
    case 4:
      normalEyes();
      $("#eyeName").html("Watching");
      eyesType3();
      break;
    case 5:
      normalEyes();
      $("#eyeName").html("Night eyes");
      eyesType4();
      break;
    case 6:
      normalEyes();
      $("#eyeName").html("Wonder down");
      eyesType5();
      break;
    case 7:
      normalEyes();
      $("#eyeName").html("Wonder up");
      eyesType6();
      break;
    case 8:
      normalEyes();
      $("#eyeName").html("Circle");
      eyesType7();
      break;
  }
}

function decorationVariation(num) {
  $("#dnadecoration").html(num);
  switch (num) {
    case 1:
      $("#decorationName").html("Basic");
      normaldecoration();
      break;
    case 2:
      $("#decorationName").html("Inverted");
      decorationType1();
      break;
    case 3:
      $("#decorationName").html("Twisted");
      decorationType2();
      break;
    case 4:
      $("#decorationName").html("Uniform");
      decorationType3();
      break;
    case 5:
      $("#decorationName").html("Uniform twist");
      decorationType4();
      break;
    case 6:
      $("#decorationName").html("Tribal");
      decorationType5();
      break;
    case 7:
      $("#decorationName").html("Propeller");
      decorationType6();
      break;
    case 8:
      $("#decorationName").html("Single");
      decorationType7();
      break;
  }
}

function animationVariation(num) {
  $("#dnaanimation").html(num);
  switch (num) {
    case 1:
      $("#animationName").html("Head");
      movingHead();
      break;
    case 2:
      $("#animationName").html("Tail");
      movingTail();
      break;
    case 3:
      $("#animationName").html("Ears");
      movingEars();
      break;
    case 4:
      $("#animationName").html("Left Ear");
      leftEar();
      break;
    case 5:
      $("#animationName").html("Right Ear");
      rightEar();
      break;
    case 6:
      $("#animationName").html("Attentive");
      attentiveCat();
      break;
  }
}

function movingHead() {
  resetAnimation();
  $("#head").addClass("movingHead");
  $("#leftEar").addClass("movingEarsLeft");
  $("#rightEar").addClass("movingEarsRight");
}

function movingTail() {
  resetAnimation();
  $("#tail").addClass("movingTail");
}

//moving both ears
function movingEars() {
  resetAnimation();
  $("#leftEar").addClass("movingEarsLeft");
  $("#rightEar").addClass("movingEarsRight");
}

// Single Ears

function leftEar() {
  resetAnimation();
  $("#leftEar").addClass("moving-Single-EarLeft");
}

function rightEar() {
  resetAnimation();
  $("#rightEar").addClass("moving-Single-EarRight");
}

// Attentive Cat Ears animation

function attentiveCat() {
  resetAnimation();
  $("#leftEar").addClass("attentionLeft");
  $("#rightEar").addClass("attentionRight");
}

function resetAnimation() {
  $("#head").removeClass("movingHead");
  $("#leftEar").removeClass("movingEarsLeft moving-Single-EarLeft attentionLeft");
  $("#rightEar").removeClass("movingEarsRight moving-Single-EarRight attentionRight");
  $("#tail").removeClass("movingTail");
}

async function normalEyes() {
  await $(".cat__eye").find("span").css("border", "none");
}

async function eyesType1() {
  await $(".cat__eye").find("span").css("border-top", "15px solid");
}

async function eyesType2() {
  await $(".cat__eye").find("span").css("border-bottom", "15px solid");
}
//top and bottom
function eyesType3() {
  $(".cat__eye").find("span").css({ "border-top": "15px solid", "border-bottom": "15px solid" });
}

//Right and left
function eyesType4() {
  $(".cat__eye").find("span").css({ "border-right": "15px solid", "border-left": "15px solid" });
}

//Right left top
function eyesType5() {
  $(".cat__eye").find("span").css({ "border-right": "15px solid", "border-left": "15px solid", "border-top": "15px solid" });
}
//Right left botton
function eyesType6() {
  $(".cat__eye").find("span").css({ "border-right": "15px solid", "border-left": "15px solid", "border-bottom": "15px solid" });
}
//Full shape
function eyesType7() {
  $(".cat__eye").find("span").css("border", "15px solid");
}

async function normaldecoration() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".cat__head-dots").css({ transform: "rotate(0deg)", height: "48px", width: "14px", top: "1px", "border-radius": "0 0 50% 50%" });
  $(".cat__head-dots_first").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "0 50% 50% 50%",
  });
}

//inverted
function decorationType1() {
  normaldecoration();
  $(".cat__head-dots").css("transform", "rotate(180deg)");
  $(".cat__head-dots_first").css("transform", "rotate(0deg)");
  $(".cat__head-dots_second").css("transform", "rotate(0deg)");
}

//Twiss
function decorationType2() {
  normaldecoration();
  $(".cat__head-dots").css("transform", "rotate(180deg)");
  $(".cat__head-dots_first").css("transform", "rotate(180deg)");
  $(".cat__head-dots_second").css("transform", "rotate(180deg)");
}

// ** Parterns **//
// Unifrom partern
function decorationType3() {
  normaldecoration();
  $(".cat__head-dots, .cat__head-dots_first, .cat__head-dots_second").css({ height: "40px", width: "20px" });
}

//Combination of 3 and 4
function decorationType4() {
  normaldecoration();
  $(".cat__head-dots, .cat__head-dots_first, .cat__head-dots_second").css({ height: "40px", width: "20px", transform: "rotate(180deg)" });
}

//Tribal decoration
function decorationType5() {
  normaldecoration();
  $(".cat__head-dots").css({ transform: "rotate(180deg)", height: "50px", "border-radius": "50% 50% 50% 50%" });
  $(".cat__head-dots_first").css({ transform: "rotate(35deg)", height: "40px" });
  $(".cat__head-dots_second").css({ transform: "rotate(-35deg)", height: "40px" });
}

//Sides down
function decorationType6() {
  normaldecoration();
  $(".cat__head-dots").css({ transform: "rotate(180deg)", height: "50px", "border-radius": "50% 50% 50% 50%" });
  $(".cat__head-dots_first").css({ transform: "rotate(135deg)", height: "45px", top: "-25px" });
  $(".cat__head-dots_second").css({ transform: "rotate(-135deg)", height: "45px", top: "-25px" });
}

//Single dot decoration
function decorationType7() {
  normaldecoration();
  var dots2 = $(".cat__head-dots_first");
  var dots3 = $(".cat__head-dots_second");
  dots2.css("height", "0px");
  dots3.css("height", "0px");
}
