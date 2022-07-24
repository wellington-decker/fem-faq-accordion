const details = document.querySelectorAll("details");
const summary = document.querySelector("summary");
const arrow = document.querySelector(".arrow");
const accordionHeading = document.querySelector(".accordion-heading");

details.forEach((detail) => {
  detail.addEventListener("toggle", (e) => {
    let getChildren = e.target.children;
    getChildren[0].firstElementChild.classList.toggle("show");
    getChildren[0].lastElementChild.classList.toggle("flip");
  });  
});
