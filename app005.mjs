import http from 'http'
import fs from 'fs'


//////cause of es6
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

//////

//let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

//createReadStream inherits from eventEmiter

/*stream - read and then write
myReadStream.on('data', (chunk) => {
    console.log('new chunk received')
    //console.log(chunk) //we got n chunks - it depends on file large
    myWriteStream.write(chunk)
})
*/


//pipe
//myReadStream.pipe(myWriteStream)

//stream - while you got/create a chunk, u can deal with it
//fs - you got/create all file, and then u can deal
//pipes - more quicker - received chunk is sent in the moment - dont have to do it manually - better perform



const server = http.createServer((req, res) =>{
    console.log('request was made: ' + req.url)
    res.writeHead(200, {
        'Content-Type': 'application/json' //was 'text/html' and 'text/plain', now wed like to send html page
    })//header

    let myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    }


    res.end(JSON.stringify(myObj))//res.end expects string or buffer - JSON is a string
    //.stringify convert jsobject to JSON

    /*
    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); //readMe.txt
    myReadStream.pipe(res) //passing all in readStream to body res
    */
    //rem: mssg bit by bit is quicker has better performance!

    //res.end('Hey ninjas!')//body?
});// it's GET - response from server


server.listen(3000,'127.0.0.1'); //or 'localhost'

console.log('yo dawgs, now listening to port 3000')
