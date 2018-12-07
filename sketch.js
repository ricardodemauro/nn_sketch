var brain;

function setup() {
  createCanvas(400, 400);
  
  brain = new NeuralNetwork(3, 3, 1);

  let a = new Matrix(3,2);
  let b = new Matrix(2,3);
  a.randomize();
  console.table(a.matrix);
  console.table(a.transpose().matrix);
}

function draw() {
  background(255);
}