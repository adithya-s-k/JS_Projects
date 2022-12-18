// var b1 = Buffer.from('pqr');
// console.log(b1);
// console.log(b1.toString());
// console.log(b1.length);
// console.log(b1[0], b1[2]);

// console.log(b1[0],b1[3])  // undefined

//var b2 = Buffer.alloc(30)
//var b2 = Buffer.alloc(30,"welcome")

// var b2 = Buffer.alloc(30, 'w');
// console.log(b2);
// console.log(b2.toString());

// var b1 = Buffer.alloc(30);
// var b2 = Buffer.allocUnsafe(20, 'a');
// console.log(b1, b1.toString());
// console.log(b2, b2.toString());

// var b1 = Buffer.alloc(100);
// console.log(b1);
// //b1.write("hello",5,2)
// b1.write('hello', 5, 100);
// console.log(b1);
// console.log(b1.toString());

// var b1 = Buffer.alloc(5);
// console.log(b1);
// //b1.write("hello",5,2)
// b1.write('hello', 2, 5);
// console.log(b1);
// console.log(b1.toString());

// very important out of range error

// var b1 = Buffer.alloc(5);
// console.log(b1);
// //b1.write("hello",5,2)
// //b1.write("hello",0,7)
// //b1.write("hello",2,7)
// b1.write('he', 5, 5); // out of range error
// console.log(b1);
// console.log(b1.toString());

// b1 = Buffer.from('pqr');
// b2 = Buffer.from('abc');
// b3 = Buffer.concat([b1, b2], 5);
// console.log(b3.toString());
// console.log(b3.length);

//

// b1 = Buffer.from('pqr');
// b2 = b1;
// console.log(b1.toString());
// console.log(b2.toString());
// //b1[0] = "P"
// b2.write('P', 0, 1);
// console.log(b1);
// console.log(b2);
// //b1.write("P",0,1)
// console.log(b1.toString());
// console.log(b2.toString());

// pqr
// pqr
// <Buffer 50 71 72>
// <Buffer 50 71 72>
// Pqr
// Pqr
//in the previous example both the buffr are pointing to the same memory location

// copy lets you copy the contents of one buffer to another buffer
b1 = Buffer.from('pqr');
b2 = Buffer.alloc(b1.length);
b1.copy(b2);
console.log(b1.toString());
console.log(b2.toString());
//b1[0] = "P"
b1.write('P', 0, 1);
console.log(b1);
console.log(b2);
//b1.write("P",0,1)
console.log(b1.toString());
console.log(b2.toString());
