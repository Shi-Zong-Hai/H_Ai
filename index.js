
var scenic = document.querySelectorAll(".scenic li");
var picture = document.querySelectorAll(".picture li");
for (var i = 0; i < scenic.length; i++) {
    scenic[i].setAttribute("index", i);
    scenic[i].addEventListener("click", function () {
        for (var j = 0; j < picture.length; j++) {
            picture[j].style.display = "none";
        }
        picture[this.getAttribute('index')].style = "block";
    })
}