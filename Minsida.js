let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};

// var imageSources = ["Monstera.jpg", "Spjutbräken.jpg", "Kaktus.jpg"];

// var index = 0;
// setInterval(function () {
//   if (index === imageSources.length) {
//     index = 0;
//   }
//   document.getElementById("image").src = imageSources[index];
//   index++;
// }, 4000);

function reveal() {
  var revealsLeft = document.querySelectorAll(".revealLeft");
  var revealsRight = document.querySelectorAll(".revealRight");
  var revealsUp = document.querySelectorAll(".revealUp");

  for (var i = 0; i < revealsLeft.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop1 = revealsLeft[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop1 < windowHeight - elementVisible) {
      revealsLeft[i].classList.add("active");
    } else {
      revealsLeft[i].classList.remove("active");
    }
  }
  for (var i = 0; i < revealsRight.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop2 = revealsRight[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop2 < windowHeight - elementVisible) {
      revealsRight[i].classList.add("active");
    } else {
      revealsRight[i].classList.remove("active");
    }
  }
  for (var i = 0; i < revealsUp.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop3 = revealsUp[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop3 < windowHeight - elementVisible) {
      revealsUp[i].classList.add("active");
    } else {
      revealsUp[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// window.addEventListener("scroll", reveal);

// function reveal() {
//   var reveals = document.querySelectorAll(".Box");
//   var revealstext = document.querySelectorAll("#Viktig-text p");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowheight = window.innerHeight;
//     var Boxtop = reveals[i].getBoundingClientRect().top;
//     var Boxpoint = 100;

//     if (Boxtop < windowheight - Boxpoint) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
//   for (var i = 0; i < revealstext.length; i++) {
//     var windowheight = window.innerHeight;
//     var Boxtop = revealstext[i].getBoundingClientRect().top;
//     var Boxpoint = 75;

//     if (Boxtop < windowheight - Boxpoint) {
//       revealstext[i].classList.add("active");
//     } else {
//       revealstext[i].classList.remove("active");
//     }
//   }
// }

window.addEventListener("resize", function () {
  slider.scrollLeft = 0;
  //We have to calculate posicioninicial all over again when resize
  posicionInicial = slider.scrollLeft;
  box_middle.size = posicionInicial + size;
  box_left.size = posicionInicial;
  box_right.size = box_middle.size + size;
  slider.scrollLeft = box_middle;
});

var slider = document.getElementById("slider");
var box = document.getElementsByClassName("box");

// Size is gonna be width + box margin
var size = 350 + 30;

/*
This is the scroll position where the first element in our silde is centered
We get this position because we used scroll-snap-aling: center back in our CSS
This will help us figure out where is the center located in the other items in our slide
And it will keep our elements centered.
*/
var posicionInicial = slider.scrollLeft;

class BoxElement {
  constructor(size, element) {
    this.size = size;
    this.element = element;
  }
  isCenter() {
    this.element.style.opacity = "1";
  }
  isNotCenter() {
    this.element.style.opacity = "0.5";
  }
}
var box_middle = new BoxElement(posicionInicial + size, box[1]);
var box_left = new BoxElement(posicionInicial, box[0]);
var box_right = new BoxElement(box_middle.size + size, box[2]);

function hide(arrow) {
  arrow.style.opacity = "0";
}
function show(arrow) {
  arrow.style.opacity = "1";
}
var arrow_left = document.getElementById("left-arrow");
var arrow_right = document.getElementById("right-arrow");

//I want the middel box to be shown in the middle by default
slider.scrollLeft = size;

//movement with arrows
arrow_left.addEventListener("click", function () {
  slider.scrollLeft -= size;
});

arrow_right.addEventListener("click", function () {
  slider.scrollLeft += size;
});

/* I listen to scroll event in the slide and detect when each box is center
 */
slider.addEventListener("scroll", function () {
  let position = slider.scrollLeft;
  console.log(slider.scrollLeft);
  if (position < box_middle.size - 30) {
    //I use 30 as a movement umbral
    hide(arrow_left);
    show(arrow_right);
    box_left.isCenter();
    box_middle.isNotCenter();
  } else if (position > box_middle.size + 30) {
    hide(arrow_right);
    show(arrow_left);
    box_right.isCenter();
    box_middle.isNotCenter();
  } else {
    show(arrow_right);
    show(arrow_left);
    box_middle.isCenter();
    box_right.isNotCenter();
    box_left.isNotCenter();
  }
});
