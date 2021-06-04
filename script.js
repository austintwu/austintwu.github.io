// Typewriter JS Code
var app = document.getElementById('intro');

var typewriter = new Typewriter(app, {
    delay: 75
});

typewriter.typeString('I’m Austin. ')
.pauseFor(1000)
    .typeString('I made this website,<br>')
    .pauseFor(400)
    .typeString('<a id="yp-link" target="_blank" href="https://www.yellowpages.love">Yellow Pages</a>,')
    .pauseFor(500)
    .typeString(' and <a id="cc-link" target="_blank" href="https://www.committeechairs.com">Committee Chairs</a>.')
    .callFunction(function() {
        $(".Typewriter__cursor").hide();
    })
    .start();

// Google Color Cycler Code
var colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
$(".google").hover(function() {
    this.style.setProperty("--hov", colors[Math.floor(Math.random()*colors.length)]);
})