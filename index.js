//  Below code displays only a static representation of machine's local time. 
function displayClock() {
    let date = new Date();
document.getElementById("dayName").innerHTML = "test" + date.toLocaleTimeString();
}
function hideShowStart() {
    let start = document.getElementById("btn");
        if (start.style.display === "none") {
            start.style.display = "block";
            } else {
            start.style.display = "none";
        }
    }
function hideShowClock() {
        let start = document.getElementById("show");
            if (start.style.display === "none") {
                start.style.display = "block";
                } else {
                start.style.display = "none";
            }
        }
function moveLogo () {
        let moveUpLogo = document.getElementById("logo");
        let op = 1;
        let timer = setInterval (function () {
        if (op <= 0.001) {
            clearInterval (timer);
            }
            moveUpLogo.style.opacity = op;
            moveUpLogo.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 15);
}        
function moveSubt () {
    let moveUpSubt = document.getElementById("subtitle");
    let op = 1;
    let timer = setInterval (function () {
    if (op <= 0.001) {
        clearInterval (timer);
        }
        moveUpSubt.style.opacity = op;
        moveUpSubt.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}      
//Cick start to begin clock, start button should disappear.
var btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    moveLogo();
    moveSubt();
    displayClock();
    hideShowStart();
});
var btn = document.querySelector('.reloj');
btn.addEventListener('click', (e) => {
    location.reload();
});