(function(window){ // pass window property to an anonymous function

    // object Ball has 3 parameters - ctx is the context of the canvas
    // x,y are the starting positions of the Ball
    function Ball(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speed = 100; // set the speed of the ball
        this.model = new Image(); // model is the image of the ball
        this.model.src = "ball.png"; // set the path to the image of the ball
    }

    Ball.prototype.draw = function() { // function draw draws the ball
            this.ctx.drawImage(this.model, this.x, this.y);
    }

    window.Ball = Ball; // register Ball property in the global namespace

})(window);