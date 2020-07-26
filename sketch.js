var ball,paddleImg,paddle,ballImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleImg = loadImage('paddle0.png');
  ballImg=loadImage('ball.png');
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(300,200,20,75);
  paddle.addImage("paddleImg",paddleImg);
  paddle.scale = 3;
  paddle.setCollider("rectangle",8,-6,4,38);
  paddle.debug = true;
  
  ball = createSprite(50,200,20,20);
  ball.addImage("ball.png",ballImg);

 
  /* assign the images to the sprites */
  /* give the ball an initial velocity of 9 in the X direction */
ball.velocityX = 9;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
    edges =  createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  //0 is leftEdge
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle,randomVelocity());
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  { paddle.velocityY = -3;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.velocityY = 3;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.isTouching(paddle)){
     ball.velocityX = random(-6,18);
     ball.velocityY = random(-6,18);
     }
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

