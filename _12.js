function fullDiamond(n){
    for( i = 0; i < n; i++ ){
        let str = ""
        for(j = n; j>i; j--){
            str += " ";
        }
        for(k = 0; k <= i; k++){
            str += "*";

        }
        for(l = 1; l <= i; l++){
            str += "*";
        }console.log(str)
    }
    for( i = 5; i >= 0; i-- ){
        let str = ""
        for(j = n; j>i; j--){
            str += " ";
        }
        for(k = 0; k <= i; k++){
            str += "*";

        }
        for(l = 1; l <= i; l++){
            str += "*";
        }console.log(str)
    }
}
fullDiamond(5)