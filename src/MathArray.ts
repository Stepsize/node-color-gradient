
class MathArray extends Array {

  constructor(...args:any[]){
    super(...args);
  }

  public add(a: Array<number>){
    if(this.length !== a.length){
      throw new Error('Arrays must be of same length');
    }
    return this.map((number, index) => {
      return number + a[index];
    })
  }

  public subtract(a: Array<number>){
    if(this.length !== a.length){
      throw new Error('Arrays must be of same length');
    }
    return this.map((number, index) => {
      return number - a[index];
    })
  }

  public divide(a: Array<number>){
    if(this.length !== a.length){
      throw new Error('Arrays must be of same length');
    }
    return this.map((number, index) => {
      return number / a[index];
    })
  }

  public multiply(a: Array<number>){
    if(this.length !== a.length){
      throw new Error('Arrays must be of same length');
    }
    return this.map((number, index) => {
      return number * a[index];
    })
  }

}

export default MathArray
