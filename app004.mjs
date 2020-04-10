import fs from 'fs'

//fs.mkdirSync('stuff'); //create
//fs.rmdirSync('stuff'); //remove - shots error with does not exist

/*fs.mkdir('stuff', () => {
    fs.readFile('readMe.txt', 'utf8', (err, data) => {
        fs.writeFile('./stuff/writeMe.txt', data, ()=>{})
    })
})*/


fs.unlink('./stuff/writeMe.txt', () =>{ //NO POSSIBILITY TO REMOVE DIRECTORY IF IT IS NOT EMPTY
    fs.rmdir('stuff', () => {})
})


