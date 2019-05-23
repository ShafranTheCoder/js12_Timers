'use strict';

let myInterval;
let timerCounter;
let downloadTimer;
let images = ["./img/2.jpg", "./img/3.jpg", "./img/4.png", "./img/1.jpg"], x = -1;

function counter () {
    let timeLeft = 9;
    downloadTimer = setInterval(function f(){
        document.getElementById("timer").innerText = timeLeft;
        timeLeft -= 1;
        if(timeLeft <= 0)
            clearInterval(downloadTimer);
    }, 1000);
}
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];

}
myInterval = setInterval(displayNextImage, 10000);
timerCounter = setInterval(counter, 10000);



document.getElementById('stop').addEventListener('click', function () {
    clearInterval(myInterval);
    clearInterval(timerCounter);
    clearInterval(downloadTimer);

});
document.getElementById('resume').addEventListener('click', function () {
    myInterval = setInterval(displayNextImage, 10000);
    timerCounter = setInterval(counter, 10000);
});