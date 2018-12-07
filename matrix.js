class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
  
      this.matrix = [];
  
      for (let i = 0, len = this.rows; i < len; i++) {
        this.matrix[i] = [];
  
        for (let j = 0, lenj = this.cols; j < lenj; j++)
          this.matrix[i][j] = 0;
      }
    }
  
    multiply(n) {
      this.loopAll((d, i, j) => d *= n);
    }
  
    add(n) {
      this.loopAll((d, i, j) => d += n);
    }
  
    loopAll(func) {
      if(func)
        for (let i = 0, len = this.matrix.length; i < len; i++) {
          for(let j = 0, lenj = this.matrix[i].length; j < lenj; j++) 
            this.matrix[i][j] = func(this.matrix[i][j], i, j);
        }
      }
}