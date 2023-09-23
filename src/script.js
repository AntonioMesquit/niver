const bemvindo = document.querySelector(".clique");
const body = document.querySelector("body")

bemvindo.addEventListener("click", function() {
    body.classList.toggle("active");
  
});