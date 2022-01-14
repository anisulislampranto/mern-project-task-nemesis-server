const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = 4040 || process.env.PORT

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})