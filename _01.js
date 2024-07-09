function halfPeramid(rows){
       
    for(let i = 0; i<rows;i++){
        let row = '';
        for(let j = 0;j<=i;j++){
            row += '*';
        }console.log(row)
    }
}

let rows = 5
halfPeramid(rows)