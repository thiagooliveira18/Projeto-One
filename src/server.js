// const http = require('http')

// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>Hello, World!</h1>')
// })

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })

const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.send("its works");
})

app.post('/users', (req, res) => {
    res.send("its works");
})

app.listen(3333);