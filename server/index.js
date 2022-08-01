const express = require('express')
const app = express()
const path = require('path')
const port = 3001
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})