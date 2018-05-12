//Cheat die that would let us predict the next number.

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i= 0;

//// The following is the closure function
  return function() {
// This inner function accesses and assigns the value of
// the variable id, which was defined in the parent function
    return list[i++]
  }
}
// makeLoadedDie returns a function which is assigned to the variable rollLoadedDie
var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6