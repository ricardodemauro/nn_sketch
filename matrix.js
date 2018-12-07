class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
  
      this.data = [];
  
      for (let i = 0, len = this.rows; i < len; i++) {
        this.data[i] = [];
  
        for (let j = 0, lenj = this.cols; j < lenj; j++)
          this.data[i][j] = 0;
      }
    }

    transpose() {
        let result = new Matrix(this.cols, this.rows);
        
        for (let i = 0, len = this.rows; i < len; i++) {
            for (let j = 0, lenj = this.cols; j < lenj; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }
        return result;
    }

    static multiply(m1, m2) {
        if(m1 instanceof Matrix && m2 instanceof Matrix) {
            if(m1.cols !== m2.rows) {
                console.error('column of A does not math rows of B')
                throw new Error('column of A does not math rows of B');
            }
            if(this.rows !== m2.cols) {
                console.error('rows of A does not math columns of B')
                throw new Error('rows of A does not math columns of B');
            }
            const a = m1;
            const b = m2;

            let result = new Matrix(a.rows, b.cols);
            
            for(let  i = 0; i < result.rows; i++) {
                for(let j = 0; j < result.cols; j++) {
                    //sum all
                    let sum = 0;
                    for(let k = 0; k < a.cols; k++) {
                        sum += a.data[i][k] * b.data[k][j];
                    }
                    result.data[i][j] = sum;
                }
            }
            return result;
        }
        else {
            console.error('only multiply by another matrix')
            throw new Error('only multiply by another matrix');
        }
    }
  
    multiply(n) {
        if(n instanceof Matrix) {
            console.error('only multiply by scale')
            throw new Error('only multiply by scale');
        }
        else {
            this.map((d, i, j) => d *= n);
        }
    }

    print() {
        console.table(this.data);
    }
  
    add(n) {
        if(n instanceof Matrix) {
            for (let i = 0, len = this.data.length; i < len; i++) {
                for(let j = 0, lenj = this.data[i].length; j < lenj; j++) 
                  this.data[i][j] = n.data[i][j];
            }
        }
        this.map((d, i, j) => d += n);
    }

    map(func) {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = func(val, i, j);
            }
        }
    }
  
    randomize() {
        this.loopAll(() => Math.floor(Math.random() * 10))
    }
}