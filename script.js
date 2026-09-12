var egg = document.getElementById("easter-egg");
var secret = document.getElementById("secret-container");

function moveEgg() {
    var x = Math.floor(Math.random() * (window.innerWidth - 30));
    var y = Math.floor(Math.random() * (window.innerHeight - 30));

    egg.style.left = x + "px";
    egg.style.top = y + "px";
}

moveEgg();

egg.onclick = function() {
    secret.style.display = "block";
    egg.style.display = "none";
};
