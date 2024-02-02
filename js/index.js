const landing = document.querySelector(".landing-page");

document.addEventListener("click", function (event) {
  console.log("Click detected at coordinates:", {
    x: event.clientX,
    y: event.clientY,
  });
  landing.classList.add("display-none");
});
