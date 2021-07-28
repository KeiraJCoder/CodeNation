let add = (num1, num2) => {
    let result = num1 + num2
    return result
}


let subtract = (num1, num2) => {
    let result = num1 - num2
    return result
}

module.exports = {
    add,
    subtract,
    message: "hi there, this is a message from Keira"
}

const _ =require(`lodash`);

var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]