function generatePyramid(rows) {
    let result = '';
  
    for (let i = 1; i <= rows; i++) {
      for (let s = 1; s <= rows - i; s++) {
        result += '  ';
      }
      
      for (let j = i; j <= 2 * i - 1; j++) {
        result += j + ' ';
      }
  
      for (let k = 2 * i - 2; k >= i; k--) {
        result += k + ' ';
      }
  
      result += '\n';
    }
  
    return result;
  }
  
  console.log(generatePyramid(4));