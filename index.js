var ran = Math.floor((Math.random() * 6) + 1);
var str = "./images/dice" + ran + ".png";
document.querySelectorAll("img")[0].setAttribute("src", str);

var ran1 = Math.floor((Math.random() * 6) + 1);
var str1 = "./images/dice" + ran1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", str1);

if (ran > ran1) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (ran < ran1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
