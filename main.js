const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const blog = require('./routes/blogs')

app.use('/blog', blog)


app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Fashion"
    let search = "Search Now!"
    // res.sendFile(path.join(__dirname, 'public/laraib.txt'))
  res.render('navbar', {siteName, search})
})
app.get('/:slug', (req, res) => {
    const date = new Date()
    fs.appendFileSync(req.params.slug, `Admin ${req.params.slug} Loggin at ${date}. \n`)
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
