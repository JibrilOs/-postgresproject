
const express = require("express");
const app = express();
const db = require("./db/dbconfig");

app.use(express.json({ limit: "50mb" }));
const port = 3000;

// Get all movies
app.get("/api/movies", (req, res) => {
  db.query('SELECT * FROM movies', (err, result) => {
     if (err)
       console.error(err);
     else
       res.json(result.rows)
  })
})


// Get movie by id
app.get("/api/movies/:id", (req, res) => {
  const Query = {
    text: 'SELECT * FROM movies WHERE id = $1',
    values: [req.params.id],
  }

  db.query(Query, (err, result) => {
    if (err) {
      return console.error('Error executing query', err.stack)
   }
   else {
     if (result.rows.length > 0)
       res.json(result.rows);
     else
       res.status(404).end();
   }
  })
})


app.listen(port,()=>{console.log("listening on port 3000")})