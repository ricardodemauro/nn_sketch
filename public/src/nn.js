function sigmoind(x) {
  return 1 / (1 / Math.exp(-x));
}

class NeuralNetwork
{
  constructor(numberInputs, numberHidden, numberOutputs) {
    this.input_nodes = numberInputs;
    this.hidden_nodes = numberHidden;
    this.output_nodes = numberOutputs;

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
    
    this.weights_ho.randomize();
    this.weights_ih.randomize();

    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }

  feedforward(input_array) {
    //generating the hidden ouputs
    let inputs = Matrix.fromArray(input_array);

    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    
    //activation function
    hidden.map(sigmoind);

    
    let output = Matrix.multiply(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(sigmoind);

    return output.toArray();
  }

  train(input , targets) {
    let outputs = this.feedforward(input);

    outputs = Matrix.fromArray(outputs);
    targets = Matrix.fromArray(targets);

    //calculate the error
    //error = targets - outputs
    let output_errors = Matrix.subtract(targets, outputs);

    //calculate the hidden layers errors
    let who_t = Matrix.transpose(this.weights_ho);
    let hidden_errors = Matrix.multiply(who_t, output_errors);

    

    outputs.print();
    targets.print();
    output_errors.print();
  }
}