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

    transpose() {
        let result = new Matrix(this.cols, this.rows);
        
        for (let i = 0, len = this.rows; i < len; i++) {
            for (let j = 0, lenj = this.cols; j < lenj; j++) {
                result.matrix[j][i] = this.matrix[i][j];
            }
        }
        return result;
    }
  
    multiply(n) {
        if(n instanceof Matrix) {
            if(this.cols !== n.rows) {
                console.error('column of A does not math rows of B')
                throw new Error('column of A does not math rows of B');
            }
            if(this.rows !== n.cols) {
                console.error('rows of A does not math columns of B')
                throw new Error('rows of A does not math columns of B');
            }
            const a = this;
            const b = n;

            let result = new Matrix(a.rows, b.cols);
            
            for(let  i = 0; i < result.rows; i++) {
                for(let j = 0; j < result.cols; j++) {
                    //sum all
                    let sum = 0;
                    for(let k = 0; k < a.cols; k++) {
                        sum += a.matrix[i][k] * b.matrix[k][j];
                    }
                    result.matrix[i][j] = sum;
                }
            }
            return result;
        }
        else {
            this.loopAll((d, i, j) => d *= n);
        }
    }
  
    add(n) {
        if(n instanceof Matrix) {
            for (let i = 0, len = this.matrix.length; i < len; i++) {
                for(let j = 0, lenj = this.matrix[i].length; j < lenj; j++) 
                  this.matrix[i][j] = n.matrix[i][j];
            }
        }
        this.loopAll((d, i, j) => d += n);
    }
  
    loopAll(func) {
      if(func)
        for (let i = 0, len = this.matrix.length; i < len; i++) {
          for(let j = 0, lenj = this.matrix[i].length; j < lenj; j++) 
            this.matrix[i][j] = func(this.matrix[i][j], i, j);
        }
    }

    randomize() {
        this.loopAll(() => Math.floor(Math.random() * 10))
    }
}