var half

function check(palindrom){

   var palLower= palindrom.toLowerCase();
   let half = palLower.split("");
   var revHalf = half.reverse();
   var newStr = revHalf.join("");
   if (palindrom === newStr){
       return("it's a palindrome")
   } else {
       return("it's not a palindrome") 
   }

}

console.log(check('abcdrd'));

console.log(check('aaaaaa'));

