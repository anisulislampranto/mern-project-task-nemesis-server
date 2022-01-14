const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9uobc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const port = 4040 || process.env.PORT

app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(err);
  const usersCollection = client.db("usersdb").collection("users");
  const adminCollection = client.db("usersdb").collection("adminpanel");

    app.post('/adduser', (req, res) =>{
        const data = req.body;
        console.log(data);
    })


});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})