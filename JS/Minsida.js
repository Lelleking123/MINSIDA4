let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};

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

mapboxgl.accessToken =
  "pk.eyJ1IjoidXNlcm5hbWUxMDEwMiIsImEiOiJjbGhwenFqdXAweHF2M2RwZXQxM2VoZXBiIn0.nnbMjlmlxu6Hc6Cf8YGZzg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/username10102/clhuw2ylw025101pn8oxv8w12",
  center: [18.062055, 59.439785], // start position
  zoom: 10, // zoom
});
