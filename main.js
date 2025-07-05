const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

app.use(express.static('public'))



app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public/laraib.txt'))
  res.sendFile('./public/shawaiz.txt', { root: __dirname })
})
app.get('/:slug', (req, res) => {
    const date = new Date()
    fs.appendFileSync(req.params.slug, `Admin ${req.params.slug} Loggin at ${date}. \n`)
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
