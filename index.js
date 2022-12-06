const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://darkspen:wjdguswns@cluster0.zwpabdk.mongodb.net/?retryWrites=true&w=majority', {}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World! ~ 안녕하세요 ~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})