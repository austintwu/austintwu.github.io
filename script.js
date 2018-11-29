// Typewriter JS Code
var app = document.getElementById('intro');

var typewriter = new Typewriter(app, {
    delay: 75
});

typewriter.typeString('I’m Austin. ')
    .pauseFor(1000)
    .typeString('<span class="location">I make stuff, </span>')
    .pauseFor(400)
    .typeString('<span class="location">teach stuff, </span>')
    .pauseFor(400)
    .typeString('<span class="location">and write stuff.</span>')
    .callFunction(function() {
        $(".Typewriter__cursor").hide();
    })
    .start();

// Google Color Cycler Code
var colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
$(".google").hover(function() {
    this.style.setProperty("--hov", colors[Math.floor(Math.random()*colors.length)]);
})