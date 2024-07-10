function Diamond(n) {
    let size = 2 * n - 1; 
    
    for (let i = 0; i < size; i++) {
        let row = "";
        
        for (let j = 0; j < size; j++) {
            if (j >= Math.abs(n - 1 - i) && j < size - Math.abs(n - 1 - i)) {
                if(i%2==0){
                    row += "*";  
                }else{
                    row += "-";
                }
                
            } else {
                row += " ";
            }
        }
        
        console.log(row);
    }
}


 Diamond(5);