const express = require('express');
const connectToDB = require('./src/db/db');

// server is database connect (the actual action) is in server.js

connectToDB()
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
})

let notes = []

app.post('/notes', (req, res) => {
    const {title,content} = req.body;
    console.log(title, content);
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "notes created sucessfully"
    })
})

app.get('/notes', (req, res) => {
    res.json(notes);
})

app.delete('/notes/:index', (req,res) => {
    const index = req.params.index;
    delete notes[index]
    res.json({
        message: "note deleted sucessfully"
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const {title} = req.body;

    notes[index].title = title
    res.json({
        message:"note updated sucessfully"
    })
})

app.listen(3000, ()=>{
    console.log('server is running');
})




// npm i mongoose -> this packet is used for connecting the express server with the mongobd 