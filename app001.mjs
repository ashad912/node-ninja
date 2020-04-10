/*var stuff = require('./stuff')

console.log(stuff.counter(...), stuff.adder(...), stuff.pi)
*/

import {adder,
        counter,
        pi } from './app001stuff.mjs'

console.log(counter(['shaun', 'crystal', 'ryu']))

console.log(adder(2,5))
console.log(pi)

//normal function statement
/*const sayHi = () => {
    console.log('hi')
}*/

function sayHi(){
    console.log('hi')
}

sayHi()

const callFunction = (fun, fun2) => {
    fun
    fun2()
}

//function expression
var sayBye = (p) => {
    console.log('bye ' + p)
}

var sayByeBye = () => {
    console.log('byebye')
}

sayBye('normal') //have to have parenthasis
console.log('function passed to func: ')
callFunction(sayBye('with param'), sayByeBye) //without parenthasis

/*
console.log(__dirname)
console.log(__filename)

console.log('hey')

setTimeout(() => {
    console.log('Timeout!!!')
}, 1000)

let time = 0;
let timer  = setInterval(() => {
    time++;
    console.log(time + ' seconds have passed')
    if(time > 3) clearInterval(timer)
}, 1000)*/

