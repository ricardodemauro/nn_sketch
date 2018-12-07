var brain;

function setup() {
  createCanvas(400, 400);
  
  brain = new NeuralNetwork(3, 3, 1);

  let a = new Matrix(3,2);
  let b = new Matrix(2,3);
  a.randomize();
  b.randomize();

  console.table(a.matrix);
  console.table(b.matrix);
  let c = a.multiply(b);
  console.table(c.matrix);
}

function draw() {
  background(255);
}