var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:10
});

typewriter.typeString('COMPUTER SCIENCE STUDENT')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("SOFTWARE DEVELOPER")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("FRIEND")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("LEADER")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("TECH ENTHUSIAST")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("SPORTS FAN")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .start();
