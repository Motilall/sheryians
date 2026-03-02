const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
})

let notes = []

// 24
app.post('/notes', (req, res) => {
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
    const {titile} = req.body;

    notes[index].titile = titile
    res.json({
        message:"note updated sucessfully"
    })
})

app.listen(3000, ()=>{
    console.log('server is running');
})