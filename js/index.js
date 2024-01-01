// const landing = document.querySelector(".landing-page");

// ocument.body.addEventListener("click", function (evt) {
//   console.dir(this);
//   //note evt.target can be a nested element, not the body element, resulting in misfires
//   console.log(evt.target);
//   alert("body clicked");
// });

const landing = document.querySelector(".landing-page");

document.addEventListener("click", function (event) {
  console.log("Click detected at coordinates:", {
    x: event.clientX,
    y: event.clientY,
  });
  landing.classList.add("display-none");
});
