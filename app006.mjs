import http from 'http'
import fs from 'fs'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const server = http.createServer((req, res) =>{
    console.log('request was made: ' + req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
    } else if (req.url === '/contact-us') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res)
    } else if (req.url === '/api/ninjas'){
        const ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}]
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
    }

    
   
});


server.listen(3000,'127.0.0.1'); //or 'localhost'

console.log('yo dawgs, now listening to port 3000')