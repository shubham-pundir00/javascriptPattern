function pattern(n){
    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < i; j++){
            str += " ";
        }
        for(let k = 0; k < 2*(n-i)-1; k++){
            if (k === 0 || k === 2 * (n - i) - 2) {
                str += "*";
            } else {
                 str += "-";
            }

        }
        console.log(str);
    }

}
pattern(5)