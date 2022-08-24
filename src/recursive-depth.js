const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let deep = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        deep = Math.max(deep, this.calculateDepth(element));
      }
    });
    deep++;
    return deep;
  }

  //Без рекурсии:
  /*
  constructor(){
this.deep = 1;
}
  
  calculateDepth(arr) {
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        this.deep++
        arr = arr.flat()
        i = 0;
      }
    }
    return this.deep;
  }
  */
}


module.exports = {
  DepthCalculator
};
