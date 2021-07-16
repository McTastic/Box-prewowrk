document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("box").style.height = "250px"
});
document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("box").style.background = "blue"
});
document.getElementById("button3").addEventListener
    ("click", function () {
        var element = document.getElementById("box");
        element.style.opacity = "0.1";
    });
document.getElementById("button4").addEventListener("click", function () {
    var element = document.getElementById("box");
    element.style.opacity = "1";
    element.style.height = "150px";
    element.style.width = "150px";
    element.style.background = "orange"
});
document.getElementById("button5").addEventListener("click", function () {
    document.getElementById("box").style.background = randomColor()
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
})