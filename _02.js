function pyramidPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let k = 0; k < (1* i - 1); k++) {
            str += ' ';
        }
        for (let j = rows; j >= i; j--) {
            str += '*';
        }
        
        console.log(str);
    }
}

pyramidPattern(5);