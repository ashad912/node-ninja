export const counter = (arr) => {
    return 'There are ' + arr.length + ' elements in this array';
}

console.log(counter(['shaun', 'crystal', 'ryu']))

export const adder = (a,b) => {
    return `The sum of the 2 numbers is ${a+b}`
}

export const pi = 3.142;

/*old stuff
module.exports.counter = counter
module.exports.adder = adder
module.exports.pi = pi

var counter
var adder
var pi

OR in the func def

module.exports.counter = function(arr){
    ...
}
etc.

OR

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
*/