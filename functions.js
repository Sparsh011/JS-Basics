// function printHello(){
//     return "Hello World!"
// }

// console.log(printHello());
// console.log(avg());

// console.log(avg(10, 15));

// function avg(a, b){
//     return (a + b) / 2;
// }

function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20; // Same variable as x declared above
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }
  exampleVar();
  
  // Example using let
  function exampleLet() {
    let y = 10;
    if (true) {
      let y = 20; // New variable y declared within the block
      console.log(y); // Output: 20
    }
    console.log(y); // Output: 10
  }
  exampleLet();