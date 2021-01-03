import express from 'express'
import path from 'path'
import open from 'open'

const PORT = 3000;
var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../src/index.html'))
})

app.listen(PORT, err => {
  if(err) {
    console.error('Ya done went and caused an error :: ', err)
  } else {
    open('http://localhost:' + PORT)
  }
})
