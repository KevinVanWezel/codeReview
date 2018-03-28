const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let g = new GameObject(new Point(1, 1, 40, "blue", "A"), new Vector2(100, 100), new Vector2(3, 2), new Vector2(0, 0));

g.rad = new Vector2(1, 1);
g.tan = new Vector2(1, 1);

let B = new Point(400, 225, 100, 'orange', "");

function loop() {

  context.clearRect(0, 0, 800, 450);
  B.draw();
  g.draw();
  requestAnimationFrame(loop);
  g.update();
  g.vel.draw(context, g.pos.dx, g.pos.dy, 20);
  g.rad.dx = B.x - g.pos.dx;
  g.rad.dy = B.y - g.pos.dy;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = -g.rad.dy;
  g.tan.dy = -g.rad.dy;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);
  if (g.point.distance(B) <= B.r + g.point.r) {
    console.log(g.vel,g.tan,g.rad);
    g.rad.angle += Math.PI;
    g.vel.sumVector(g.rad, g.tan);
  }

  g.rad.draw(context, g.pos.dx, g.pos.dy, 50)
  g.tan.draw(context, g.pos.dx, g.pos.dy, 50)


}


loop();
