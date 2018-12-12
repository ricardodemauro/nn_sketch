var brain;

var trainning_data = [
  {
    inputs: [0, 0],
    output: [0]
  },
  {
    inputs: [1, 0],
    output: [1]
  },
  {
    inputs: [0, 1],
    output: [1]
  },
  {
    inputs: [1, 1],
    output: [0]
  }
]

function setup() {
  createCanvas(400, 400);
  
  brain = new NeuralNetwork(2, 2, 1);

  //let targets = [1];
  
  for(let i = 0; i < 50000; i++) {
    let data = random(trainning_data);
    //for(data of trainning_data) {
    brain.train(data.inputs, data.output);
    //}
  }
  
  
  //let input = [1, 0];
  console.log(brain.predict([1, 0]))
  console.log(brain.predict([0, 1]))
  console.log(brain.predict([1, 1]))
  console.log(brain.predict([0, 0]))
}

function draw() {
  background(255);
}