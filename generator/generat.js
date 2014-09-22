'user strict'

function* fibonacci(){
  console.log("---1--");
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    console.log("---2--");
    var current = fn2;
    console.log("---3--");
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;//return value
  }
}

module.exports = function (){
	var seq = fibonacci();
	console.log(seq.next());
	console.log(seq.next());
        console.log(seq.next());
	
}

//var sequence = fibonacci();
//print(sequence.next()); // 1
//print(sequence.next()); // 1
//print(sequence.next()); // 2
//print(sequence.next()); // 3
//print(sequence.next()); // 5
//print(sequence.next()); // 8
//print(sequence.next()); // 13
