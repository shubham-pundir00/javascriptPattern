function pattern(n){
    let currentNum = 1;
    for(let i = 1;i <= n; i++){
        let rowstr = '';
        for(let j = 1; j <= i; j++ ){
            rowstr += currentNum;
            currentNum++;

        }
        console.log(rowstr)
    }
}
pattern(4)