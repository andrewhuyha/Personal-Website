var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:10
});

typewriter.typeString('Welcome to my website!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Software Engineer")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Student at Cal State Fullerton")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Studying Computer Science and Business")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Into all things tech-related!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Sports/eSports Enthusiast")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .start();
