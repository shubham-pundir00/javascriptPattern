function rhombusPatt(num){
    for(i = num; i> 0; i--){
        let str = ''
        for(j = 1; j<i; j++){
            str += ' ';
        }
        for(k = i; k<=i; k++){
            str +="*****";
        }
        console.log(str)
    }
}
rhombusPatt(5)