import express from 'express'
import bodyParser from 'body-parser'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express() //access to express in variable

var urlencodedParser = bodyParser.urlencoded({extended: false}) //prepare parser to forms

app.set('view engine', 'ejs') //ejs is a template engine - to make possib to embed js in html
//to get DYNAMIC CONTENT!
//it's front like React

/*
app.get('/', (req, res) => { //express extends http package
    res.send('this is the homepage') //just text
})
*/

/*app.use('/assets', (req, res, next)=> { //next we've finished middleware - go to the next middleware
    console.log(req.url) //req.url return url after assets, 
    // /assets -> /
    // /assets/profile -> /profile
    next();
}) //for evry req*/

app.use('/assets', express.static('stuff')) //built-in express joining the styles file - neccesary

//next middleware is in the next method - that's why next is neccessary

app.get('/', (req, res) => { //express extends http package
    //res.sendFile(__dirname + '/index.html') // change for .ejs
    //all code between req and res is middleware
    res.render('index')
})

app.get('/contact', (req, res) => { //express extends http package
    //res.sendFile(__dirname + '/contact.html')
    //console.log(req.query)// req.query shows query strings ? & &...
    res.render('contact', {qs: req.query}) //object passed to ejs template read as qs.person and qs.dept
})

//post request has to have handle with body http request
//that's why we're using body parser - for different type of mssgs
//its middleware
//its shoted after submitting and pass mssg from form


app.post('/contact', urlencodedParser, (req, res) => { //express extends http package
    console.log(req.body) //parser set mssg as body in req
    res.render('contact-success', {data: req.body}) //object passed to ejs template read as qs.person and qs.dept
})
//nodemailer is tool to send mail with f.e. confirmation


app.get('/profile/:name', (req, res) => {
    
    //res.send('You requested to see a profile with the id of ' + req.params.name) //sending plain text
    let data = {age: 29, job: "ninja", hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data}) //it's going automatically to 'views' folder WOOW!
})




app.listen(3000)

