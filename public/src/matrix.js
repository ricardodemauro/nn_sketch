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

    static transpose(matrix) {
        let result = new Matrix(matrix.cols, matrix.rows);
        
        for (let i = 0, len = matrix.rows; i < len; i++) {
            for (let j = 0, lenj = matrix.cols; j < lenj; j++) {
                result.data[j][i] = matrix.data[i][j];
            }
        }
        return result;
    }

    static fromArray(arr) {
        let m = new Matrix(arr.length, 1);
        for(let i = 0; i < arr.length; i++) {
            m.data[i][0] = arr[i];
        }
        return m;
    }

    static toArray(matrix) {
        let arr = [];
        for(let i = 0; i < matrix.rows; i++) {
            for(let j = 0; j < matrix.cols; j++) {
                arr.push(matrix.data[i][j]);
            }
        }
        return arr;
    }

    toArray() {
        return Matrix.toArray(this);
    }

    static multiply(m1, m2) {
        if(m1 instanceof Matrix && m2 instanceof Matrix) {
            if(m1.cols !== m2.rows) {
                console.error('columns of m1 does not math rows of m2')
                throw new Error('columns of m1 does not math rows of m2');
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
        else {
            this.map((d, i, j) => d += n);
        }
    }

    static subtract(a, b) {
        //return new matrxi a - b
        let result = new Matrix(a.rows, a.cols);
        for(let i = 0; i < a.rows; i++) {
            for(let j = 0; j < a.cols; j++) {
                let val = a.data[i][j];
                result.data[i][j] = a.data[i][j] - b.data[i][j];
            }
        }
        return result;
    }

    map(func) {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = func(val, i, j);
            }
        }
    }
  
    randomize() {
        this.map((v, i, j) => Math.random() * 2 - 1);
    }
}