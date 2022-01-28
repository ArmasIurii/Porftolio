var total = 0;

let s = prompt("Value to conver");

var romanToInt = function(s) {
    const map={
    I  :           1,
V :            5,
X :            10,
L:             50,
C :            100,
D :            500,
M:             1000
    }
    

    
    for (let i = 0; i < s.length ; i ++){
      let currentI = map[s.charAt(i)];
        let nextI = map[s.charAt(i+1)];
        if (nextI){
         if (currentI >= nextI){
             total += currentI;
         } else  {
             total += (nextI - currentI);
             i++
         } 
        }else{
                total += currentI;
      }
    }
};
romanToInt(s);
console.log(total)

