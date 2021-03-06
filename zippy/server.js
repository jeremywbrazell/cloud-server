'use strict';

const express = require('express');
const app = express();


app.use(express.static('./public'));

app.get('/', (req,res) => {
  res.status(200).send("This is my zippy zip file");
});

app.listen( process.env.PORT, () => console.log(`Listening on Port ${process.env.PORT}`) );