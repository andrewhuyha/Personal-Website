var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:10
});

typewriter.typeString('Computer Science Student')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Software Engineer")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Leader")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Friend")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Tech Enthusiast")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Sports/eSports Fanatic")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .start();
