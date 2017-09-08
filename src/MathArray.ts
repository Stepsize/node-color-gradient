
class MathArray extends Array {

  constructor(...args:any[]){
    super(...args);
  }

  public add(a: Array<number> | number){
    let isArray = Array.isArray(a);
    if(isArray && this.length !== a.length){
      throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
    }
    return this.map((number, index) => {
      if(isArray){
        return number + a[index];
      } else {
        return number + a;
      }
    })
  }

  public subtract(a: Array<number> | number){
    let isArray = Array.isArray(a);
    if(isArray && this.length !== a.length){
      throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
    }
    return this.map((number, index) => {
      if(isArray){
        return number - a[index];
      } else {
        return number - a;
      }
    })
  }

  public divide(a: Array<number> | number){
    let isArray = Array.isArray(a);
    if(isArray && this.length !== a.length){
      throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
    }
    return this.map((number, index) => {
      if(isArray){
        return number / a[index];
      } else {
        return number / a;
      }
    })
  }

  public multiply(a: Array<number> | number){
    let isArray = Array.isArray(a);
    if(isArray && this.length !== a.length){
      throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
    }
    return this.map((number, index) => {
      if(isArray){
        return number * a[index];
      } else {
        return number * a;
      }
    })
  }

}

export default MathArray
