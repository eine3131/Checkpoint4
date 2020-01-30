const express = require('express');
const app = express();
const connection = require('./conf');
const multer = require('multer');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//upload files-images
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage }).single('file');

app.post('/', (req, res) => {
  upload(req, res, err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    }
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});


//Display all the mouvements.
app.get(`/api/Judo_Techniques`, (req, res) => {
  connection.query('SELECT * FROM mouvement', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
      console.log(res);
    } else {
      res.json(results);
    }
  })
});

// Create a new mouvement. 
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

// Create a new category (in fr: technique).
app.post(`/api/Judo_Techniques`, (req, res) => {
  const formData = req.body;
  connection.query(`INSERT INTO technique SET ?`, formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      res.status(200).json(formData);
    }
  });
});

// Display every mouvements belonging to a precise category.
app.get(`/api/Judo_Techniques/mouvement/:id`, (req, res) => {
  const id = req.params.id;
  connection.query
    ("SELECT mouvement.* FROM technique JOIN mouvement ON technique_id = technique.id WHERE technique.id = ?",
      [id], (err, results) => {
        if (err) {
          res.status(500).send("An error occured");
        } else {
          res.json(results);
        }
      })
});

app.get(`/api/mouvement`, (req, res) => {
  let sql = 'SELECT * FROM mouvement';
  const sqlValues = [];
  if (req.query.ceinture) {
    sql += ' WHERE ceinture = ?';
    sqlValues.push(req.query.ceinture);
  }
  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

//Display all the categories.
app.get(`/api/technique`, (req, res) => {
  connection.query('SELECT * FROM technique', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
      console.log(res);
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