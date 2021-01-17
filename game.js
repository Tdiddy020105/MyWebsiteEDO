(function () { // make an anonymous function so we don't pollute the global namespace
    var canvas; // our canvas
    var ctx; // canvas context
    var ball; // our ball object
    var keysDown = {}; // for keyboard handling
    var bgImage, bgReady = false; // background image
    var then; // used for game loop

    function init() { // prepares the canvas and initializes the game
        canvas = document.getElementById("main_canvas"); // get the canvas
        canvas.style.left = "700px";
        canvas.style.top = "100px";
        canvas.style.position = "absolute";
        ctx = canvas.getContext('2d'); // create canvas Context

        bgImage = new Image(); // background image, grass in our case
        bgImage.onload = function() { // if the image is ready...
            bgReady = true;
            ctx.drawImage(bgImage, 0, 0); // draw it
        }
        bgImage.src = "grass.jpg"; // the path to the background image

        // register event listeners for keyDown and keyUp
        window.addEventListener(
            "keydown",
            function (e) {
                keysDown[e.keyCode] = true;
                document.querySelector("#title").innerHTML = `Key: ${e.key}`; //this adds what key you are pressing
            },
            false
        );
        window.addEventListener(
            "keyup",
            function (e) {
                delete keysDown[e.keyCode];
                document.querySelector("#title").innerHTML = ""; //this is to remove what key is being pressed
            },
            false
        );

        ball = new Ball(ctx, canvas.width / 2, canvas.height / 2); // let's put the ball in the middle of the canvas
        then = Date.now();
        setInterval(mainLoop, 1); // set the main game loop
    }

    // called each iteration of the game loop
    function update(modifier) {

        // keypress handling
        if (38 in keysDown)  //up movement - W
           ball.y -= ball.speed * modifier;
        if (40 in keysDown) //down movement - S
            ball.y += ball.speed * modifier;
        if (37 in keysDown) //left movement - A
            ball.x -= ball.speed * modifier;
        if (39 in keysDown) //right movement - D
            ball.x += ball.speed * modifier;

        // if the ball runs out of the canvas, let's put it on the other side of it
        if (ball.x < 0)
            ball.x = canvas.width;
        if (ball.x > canvas.width)
            ball.x = 0;
        if (ball.y < 0)
            ball.y = canvas.height;
        if (ball.y > canvas.height)
            ball.y = 0;
    }

    function draw() {
            ctx.drawImage(bgImage, 0, 0); // draws the background
            ball.draw(); // draws the ball
    }

    // main game loop
    function mainLoop() {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000); // update movement
        draw(); // draw the whole canvas

        then = now;
    }

    init(); // call the initialization function

})();