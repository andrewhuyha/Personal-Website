var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Welcome to my website!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a third year student at Cal State Fullerton.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm studying computer science and business.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a software engineer.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm into all things tech-related!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm also interested in sports/eSports.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also like to read about philsophy and productivity.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for Visiting!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("SHEEEEEEEEEEEEEEESH")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .start();
