var brain;

function setup() {
  createCanvas(400, 400);
  
  brain = new NeuralNetwork(2, 2, 1);

  let input = [1, 0];
  let targets = [1];
  
  let outputs = brain.train(input, targets);
  
  //let output = brain.feedforward(input);

  //console.log(outputs);
}

function draw() {
  background(255);
}