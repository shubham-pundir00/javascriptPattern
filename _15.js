function rhombusPatt(num){
    for(i = 0; i<num; i++){
        let str = ''
        for(j = 0; j<i; j++){
            str += ' ';
        }
        for(k = i; k<=i; k++){
            str +="*****";
        }
        
        console.log(str)
    }
}
rhombusPatt(5)