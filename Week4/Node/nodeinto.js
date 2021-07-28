
// // const functions = require("./functions")

// // console.log(functions.add(10, 35))

// // const maths = require("./maths")

// // console.log(maths.multiply(10, 35))

// const os = require("os");
// const fs = require("fs");

// let userDetails = os.userInfo().username;

// fs.appendFile(`oh-hi.txt`, `Oh Hi ${userDetails}`, (err) => {
//     if (err){
//         console.log("oops");
//     }
// }
// )
const _ =require(`lodash`);

// var array = [1, 2, 3];
 
// _.reverse(array);
// // => [3, 2, 1]
 
var array = [1, 2, 3];

_.tail([ 2, 3]);
// => [2, 3]

console.log(array);
// => [3, 2, 1]