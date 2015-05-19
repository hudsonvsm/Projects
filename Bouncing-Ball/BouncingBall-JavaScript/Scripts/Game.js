'use strict';
var context, c,
    width = 500, 
    heigth = 400, 
    smallCount = 0, 
    origBall = 0, 
    balls = [];

var Ball = function (x, y, sX, sY, r) {
    this._posX = x;
    this._posY = y;
    this._speedX = sX;
    this._speedY = sY;
    this._radius = r;
    this._isSmall = false;

    return {
        PosX: this._posX,
        PosY: this._posY,
        SpeedX: this._speedX,
        SpeedY: this._speedY,
        Radius: this._radius,
        IsSmall: this._isSmall
    };

};

window.onload = function () {
    c = document.getElementById("canvas");
    context = c.getContext("2d");
    setInterval(drawAll,100);
}

function drawAll() {
    context.clearRect(0, 0, width, heigth);
    context.fillStyle = "#0000ff";

    var currBalls = [];
    for (var i = 0; i < balls.length; i++) {

        // Boundary Logic
        if (balls[i].PosX <= (0 + balls[i].Radius) || balls[i].PosX >= heigth - balls[i].Radius) {
            if (balls[i].IsSmall) {
                balls[i].SpeedX = -balls[i].SpeedX;
            } else {
                var ball1 = new Ball(balls[i].PosX,
                    balls[i].PosY + 10,
                    Math.floor((Math.random() * 10) - 5),
                    Math.floor((Math.random() * 10) - 5),
                    balls[i].Radius / 2);
                ball1.IsSmall = true;
                var ball2 = new Ball(balls[i].PosX,
                    balls[i].PosY - 10,
                    Math.floor((Math.random() * 10) - 5),
                    Math.floor((Math.random() * 10) - 5),
                    balls[i].Radius / 2);
                ball2.IsSmall = true;

                currBalls.push(ball1);
                currBalls.push(ball2);
                smallCount += 2;
                document.getElementById('SmallBalls').innerHTML = smallCount;
                continue;
            }
        }
        if (balls[i].PosY <= (0 + balls[i].Radius) || balls[i].PosY >= (width - balls[i].Radius)) {
            if (balls[i].IsSmall) {
                balls[i].SpeedY = -balls[i].SpeedY;
            } else {
                var ball3 = new Ball(balls[i].PosX + 10,
                    balls[i].PosY,
                    Math.floor((Math.random() * 10) - 5),
                    Math.floor((Math.random() * 10) - 5),
                    balls[i].Radius / 2);
                ball3.IsSmall = true;
                var ball4 = new Ball(balls[i].PosX - 10,
                    balls[i].PosY,
                    Math.floor((Math.random() * 10) - 5),
                    Math.floor((Math.random() * 10) - 5),
                    balls[i].Radius / 2);
                ball4.IsSmall = true;

                currBalls.push(ball3);
                currBalls.push(ball4);
                smallCount += 2;
                document.getElementById('SmallBalls').innerHTML = smallCount;
                continue;
            }
        }

        context.beginPath();
        context.arc(balls[i].PosY, balls[i].PosX, balls[i].Radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();

        balls[i].PosX += balls[i].SpeedX;
        balls[i].PosY += balls[i].SpeedY;
        currBalls.push(balls[i]);
    }
    balls = [];
    balls = balls.concat(currBalls);
}


function addCircle() {
    var posX = Math.floor((Math.random() * (heigth - 50)) + 50);
    var posY = Math.floor((Math.random() * (width - 50)) + 50);
    var speedX = Math.floor((Math.random() * 10) - 5);
    var speedY = Math.floor((Math.random() * 10) - 5);
    var radius = 20;
    
    balls.push(new Ball(posX, posY, speedX, speedY, radius));
    origBall += 1;
    document.getElementById('originalBalls').innerHTML = origBall;
};