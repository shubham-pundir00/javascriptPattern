function rightHalf(rows){
for(i = 1; i <= rows; i++){
    let str =''
    for(j = rows; j > i ; j--){
        str += ' '
    }
    for(k = 0; k < i;k++){
        str +='*'
    }
    console.log(str)
}
}
rightHalf(5)