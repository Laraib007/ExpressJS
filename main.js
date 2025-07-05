const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/:slug', (req, res) => {
    const date = new Date()
    fs.appendFileSync("loggin.txt", `Admin ${req.params.slug} Loggin at ${date}. \n`)
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
