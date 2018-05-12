//This function takes in a number x and returns a function that counts down when it is called.
var countdownGenerator = function (x) {
 var list = ['T-minus 3...','T-minus 2...', 'T-minus 1...', 'Blast Off!','Rockets already gone, bub!'];
    var i = 0
    return function() {
        if (x > i){
            return (list[i++]);
         } else {
        return list[4];
         }
     }
  };
 

var countdown = countdownGenerator(5);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!