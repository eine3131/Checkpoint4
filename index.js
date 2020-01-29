const express = require('express');
const app = express();
const connection = require('./conf');

app.get(`/api/Judo_Techniques`, (req, res) => {
  connection.query('SELECT * FROM mouvement', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des recettes');
      console/log(res);
    } else {
      res.json(results);
    }
  })
});

const port = 5000;

app.listen(port, err => {
  console.log('listening on port 5000');
  if (err) {
    throw new Error('Something bad happened...');
  }
});