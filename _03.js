function halfPeramid(rows){
    for(let i = 1; i<=rows;i++){
        let row = '';
        for(let j = 1;j<=i;j++){
            row += j;
        }console.log(row)
    }
}

let rows = 5
halfPeramid(rows)