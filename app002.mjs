//var events = require('events')
import events from 'events'
/*element.on('click', () => {

})*/

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (mssg) => {
   console.log(mssg)
})

myEmitter.emit('someEvent', 'the event was emitted') //when someEvent - emit the passed (second param) mssg


////////////////



/*
//es5 version

//utils can be replaced by classes
var util = require('util')\
import util from 'util'

var Person = function(name){ //cannot be arrowfunc - 'this' context is passed
   this.name = name
}

util.inherits(Person, events.EventEmitter) //Person inherits things attached to eventEmitter
*/

//es6 version

class Person extends events.EventEmitter {
    constructor(name){
        super()
        this.name = name;
    }
}

let james = new Person('james')
let mary = new Person('mary')
let ryu = new Person('ryu')

let people = [james, mary, ryu]

people.forEach((person) => {
   person.on('speak', (mssg) => {
       console.log(person.name + ' said: ' + mssg)
   }) //method inherit from emitter
})


james.emit('speak', 'hey dudes')
mary.emit('speak', 'hey ladies')
ryu.emit('speak', 'hey ninjas')
