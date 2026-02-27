// const http = require("http")

// const server = http.createServer((req, res) => {
//     res.end("Hello World!")
// })

// server.listen(3000, () => {
//     console.log("Server is running")
// })




const express = require("express")

const app = express() // server is created

app.get('/home', (req, res) => {
    res.send("Welcome Home Page")
})

app.listen(3000, () => {
    console.log("server is running...")
}) // server is running