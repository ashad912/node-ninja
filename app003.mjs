import fs from 'fs'

/*
//sync
let readMe = fs.readFileSync('readMe.txt', 'utf8') //have to be done in all - that's why its sync
//second param is encoding (like utf-8) we work on binary data
//code

//console.log(readMe)

fs.writeFileSync('writeMe.txt', readMe)
*/

fs.readFile('readMe.txt', 'utf8', (err, data) => { //async version - third is callback after method finish
    //console.log(typeof data);
    fs.writeFile('writeMe.txt', data, () => {
        //fs.unlink('writeMe.txt', ()=>{}) //deleting
    }) //callback is no longer optional! :/
})
console.log('test')

