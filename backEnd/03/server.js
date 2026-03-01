const express = require('express');

const app = express()

// app.get('/home', (req, res)=>{
//     res.send("Welcom to the home page.")
// })

// app.get('/about', (req,res)=>{
//     res.send("Welcome to the about page.")
// })


app.use(express.json())
// a middle ware - for body

let notes = []

// notes -> title & description
app.post('/notes', (req, res)=>{
    // express cannot acess to body by default
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "Notes added sucessfully",
        notes: notes
    })
})

app.listen(3000, ()=> {
    console.log("server is running")
})