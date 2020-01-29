const express = require('express');
const app = express();
const connection = require('./conf');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

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

// app.get(`/api/Judo_Techniques/mouvement`, (req, res) => {
//   const formData = req.body;
//   connection.query(`SELECT * FROM mouvement`, formData, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Error");
//     } else {
//       res.status(200).json(formData);
//     }
//   });
// });

app.post(`/api/Judo_Techniques`, (req, res) => {
  const formData = req.body;
  connection.query(`INSERT INTO mouvement SET ?`, formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      res.status(200).json(formData);
    }
  });
});

const port = 5000;

app.listen(port, err => {
  console.log('listening on port 5000');
  if (err) {
    throw new Error('Something bad happened...');
  }
});