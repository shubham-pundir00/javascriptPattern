function halfPeramid(rows){
       
    for(let i = rows; i>0;i--){
        let row = '';
        for(let j = 1;j<=i;j++){
            row += j;
        }console.log(row)
    }
}

let rows = 5
halfPeramid(rows)