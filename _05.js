function pyramidPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = rows; j > i; j--) {
            str += ' ';
        }
        for (let k = 0; k < (2 * i - 1); k++) {
            str += '*';
        }
        console.log(str);
    }
}

pyramidPattern(5);