$(document).ready(function() {
    $(".letter1").hide();
    $(".letter2").hide();
    $(".letter3").hide();
    $(".letter4").hide();
    $(".letter5").hide();
    $(".letter6").hide();
    $("#logo").hide();
});
let showbar = true;
let letters = document.getElementsByClassName("letter");
console.log(letters);

function blink_text() {
    $('.bar').toggleClass("transparent");
}
setInterval(blink_text, 500);
blink_text();

let timer = 0;
let lets = [".letter1", ".letter2", ".letter3", ".letter4", ".letter5", ".letter6"];
setTimeout(() => {
    for (let i = 0; i < lets.length; i++) {
        setTimeout(() => {
            $(lets[i]).show();
            $('.bar').removeClass("transparent");
        }, timer);
        timer += (Math.random() * 500);
    }
    setTimeout(() => {

        $('#logo').fadeTo(500, 1);



    }, timer + 1000);
}, 1000);