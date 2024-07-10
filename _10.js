function generateRightHalfDiamond(rows) {
    let result = '';
  
    for (let i = 1; i <= rows; i++) {

      for (let j = 1; j <= i; j++) {
        result += '*'+ ' ';
      }

      result += '\n';
    }
    
    for (let i = rows - 1; i >= 1; i--) {

      for (let j = 1; j <= i; j++) {
        result += '*' + ' ';
      }
      result += '\n';
    }
  
    return result;
  }
  
  console.log(generateRightHalfDiamond(4));