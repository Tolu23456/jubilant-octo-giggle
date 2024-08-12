const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

let executeCodes = () => {
  if (document.cookie.includes("HOS")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "Cookie = Home Of Science; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);


/*
* MapBox
*/

mapboxgl.accessToken = 'pk.eyJ1IjoidG9sdS0xIiwiYSI6ImNsdmptYzJsajBpYzMycWxxYWVuNmw4a3gifQ.y958WVWMFm411m4nEeTJpQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/tolu-1/clvjmx6gv01dg01oc4nsq4wg8', // style URL
  center: [6.690578, 3.322996], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

/* MapBox Finished*/


let internetRequest = document.querySelector('#internet-request');
let heading = document.querySelector('.heading');
let text = document.querySelector('.text');
if (internetRequest === true) {
  internetRequest.style.display = 'none'
} else {
  internetRequest.style.display = 'block'
  heading.innerText = 'Internet Is Required'
  text.innerText = 'Dude! What wrong with your internet.'
};