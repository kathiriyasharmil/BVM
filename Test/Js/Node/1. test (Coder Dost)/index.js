require('dotenv').config();
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const logger = require("morgan");

var port = process.env.PORT || 8081;

server.use(express.urlencoded({ extended: false }));
server.use(bodyParser.json());

// server.use(express.static('public'))
server.use(express.static(process.env.STATIC_FOLDER))


//Middleware
server.use((req, res, next) => {
    console.log("Method:", req.method, "Ip:", req.ip, "Path:", req.path);
    next();
})
server.use(logger());


server.get('/home', (req, res) => {
    res.json({ "name": 'sharmil' })
});


server.get('/homepage', (req, res) => {
    res.send("<h1>HTML</h1>")
})


// Query String 31
server.get("/querystring", (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    res.json({ name, age })
})
// ex=/persone/?name=sharmil&agw=20


//URL Params
server.get("/urlparams/:name/:age", (req, res) => {
    let name = req.params.name;
    let age = req.params.age;
    res.json({ name, age })
})
// ex=/persone/sharmil/20 && persone/${value.name}/${value.age}


server.listen(port, () => {
    console.log("env Port", process.env.PORT)
})

// server.listen(8080,()=>{
//     console.log("server start")
// })

// https://youtu.be/1CgJPjGzFII