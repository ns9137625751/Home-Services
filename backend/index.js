const connectToMongo = require('./db');
const express = require('express')
var cors = require("cors")


connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contactus',require('./routes/contactus'));
app.use('/api/provider',require('./routes/provider'));
app.use('/api/admin',require('./routes/admin'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})