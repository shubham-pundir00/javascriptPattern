function rightHalfDiamond(rows) {
    let result = '';
  
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        if(i%2==0){
            result += '-'+' ';
        }else{
        result += '*'+ ' ';}
      }
      result += '\n';
    }
  
    for (let i = rows - 1; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        if(i%2==0){
            result += '-'+' ';
        }else{
        result += '*' + ' ';}
      }
      result += '\n';
    }
    return result;
  }
  
  console.log(rightHalfDiamond(5));