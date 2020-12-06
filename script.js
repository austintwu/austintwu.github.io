// Typewriter JS Code
var app = document.getElementById('intro');

var typewriter = new Typewriter(app, {
    delay: 75
});

typewriter.typeString('Hi, I’m Austin. ')
    .pauseFor(1000)
    .typeString('This is my website.')
    .callFunction(function() {
        $(".Typewriter__cursor").hide();
    })
    .start();

// Google Color Cycler Code
var colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
$(".google").hover(function() {
    this.style.setProperty("--hov", colors[Math.floor(Math.random()*colors.length)]);
})