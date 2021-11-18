'use strict';

const express = require('express');
const app = express();


app.use(express.static('./public'));

app.get('/', (req,res) => {
  res.status(200).send("The Utmost Boring Home Page In The Freaking World");
});

app.listen( process.env.PORT, () => console.log(`Listening on Port ${process.env.PORT}`) );