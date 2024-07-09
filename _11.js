let rows = 5
function result(rows){

for(i = 1; i <= rows; i++){
    let str =''
    for(j = rows; j > i ; j--){
        str += ' '
    }
    for(k = 0; k < i;k++){
        str +='*'
    }console.log(str)
}
for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let k = 0; k < (1* i - 1); k++) {
        str += ' ';
    }
    for (let j = rows; j >= i; j--) {
        str += '*';
    }
    console.log(str)
}
}
console.log(result(rows))