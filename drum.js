

// Buttons ko select karna aur click events attach karna
const numberOfButtons = document.querySelectorAll('.button').length;

for(let j = 0; j < numberOfButtons; j++){
  document.querySelectorAll('.button')[j].addEventListener('click', function(){
    let buttonStyle = this.innerHTML.toLowerCase(); // innerHTML ko lowercase mein convert karna
    sound(buttonStyle);
    animation(buttonStyle);
  })
}

// Keyboard press event
document.addEventListener('keypress', function(event){
  let key = event.key.toLowerCase(); // key ko lowercase mein convert karna
  sound(key);
  animation(key);
})

// Sound function
function sound(key){
  switch(key){
    case 'h':
      let sound1 = new Audio('h.mp3');
      sound1.play();
      break;
    case 'i':
      let sound2 = new Audio('i.mp3');
      sound2.play();
      break;
    case 't':
      let sound3 = new Audio('t.mp3');
      sound3.play();
      break;
    case 'l':
      let sound4 = new Audio('l.mp3');
      sound4.play();
      break;
    case 'e':
      let sound5 = new Audio('e.mp3');
      sound5.play();
      break;
    case 's':
      let sound6 = new Audio('s.mp3');
      sound6.play();
      break;

      case 'k':
        let sound7 = new Audio('h.mp3');
        sound7.play();
        break;

    default: 
      console.log(key);
  }
}

// Animation function
function animation(currentKey){
  let activeButton = document.querySelector('.' + currentKey);
  
  if (activeButton) { // Check if activeButton exists
    activeButton.classList.add('animation');

    setTimeout(function() {
      activeButton.classList.remove('animation');
    }, 100);
  }
}




























// const numberOfButtons = document.querySelectorAll(".button").length;

// for (let j = 0; j < numberOfButtons; j++) {
//   document
//     .querySelectorAll(".button")
//     [j].addEventListener("click", function () {
//       let buttonStyle = this.innerHTML;
//       sound(buttonStyle);
//       animation(buttonStyle);
//     });
// }

// document.addEventListener("keypress", function (event) {
//   sound(event.key);
//   animation(event.key);
// });

// function sound(key) {
//   switch (key) {
//     case "h":
//       let sound1 = new Audio("h.mp3");
//       sound1.play();
//       break;

//     case "i":
//       let sound2 = new Audio("i.mp3");
//       sound2.play();
//       break;

//     case "t":
//       let sound3 = new Audio("t.mp3");
//       sound3.play();
//       break;

//     case "l":
//       let sound4 = new Audio("l.mp3");
//       sound4.play();
//       break;

//     case "e":
//       let sound5 = new Audio("e.mp3");
//       sound5.play();
//       break;

//     case "s":
//       let sound6 = new Audio("s.mp3");
//       sound6.play();
//       break;

//     default:
//       console.log(key);
//   }
// }

// function animation(currentKey) {
//   let activeButton = document.querySelector("." + currentKey);

//   if (activeButton) {
//     activeButton.classList.add("animation");

//     setTimeout(function () {
//       activeButton.classList.remove("animation");
//     }, 100);
//   }
// }




















































// var numberOfButtons =
//     document.querySelectorAll(".button").length;

// for (var j = 0; j < numberOfButtons; j++) {

//   document.querySelectorAll(".button")[j]
//   .addEventListener("click", function() {

//     var buttonStyle = this.innerHTML;
//     sound(buttonStyle);
//     animation(buttonStyle);
//   });
// }

// document.addEventListener("keypress", function(event) {
//   sound(event.key);
//   animation(event.key);
// });

// function sound(key) {
//   switch (key) {
//     case "w":
//       var sound1 = new Audio("h.mp3");
//       sound1.play();
//       break;

//     case "a":
//       var sound2 = new Audio("e.mp3");
//       sound2.play();
//       break;

//     case "s":
//       var sound3 = new Audio('i.mp3');
//       sound3.play();
//       break;

//     case "d":
//       var sound4 = new Audio('t.mp3');
//       sound4.play();
//       break;

//     case "j":
//       var sound5 = new Audio('l.mp3');
//       sound5.play();
//       break;

//     case "k":
//       var sound6 = new Audio('e.mp3');
//       sound6.play();
//       break;

//     case "l":
//       var sound7 = new Audio('s.mp3');
//       sound7.play();
//       break;

//     default: console.log(key);
//   }
// }

// function animation(currentKey) {
//   var activeButton = document.querySelector("." + currentKey);
//   activeButton.classList.add("animation");

//   setTimeout(function() {
//     activeButton.classList.remove("animation");
//   }, 100);
// }
