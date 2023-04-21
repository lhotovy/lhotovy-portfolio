const express = require("express");
const serv = express();
const mysql = require("mysql");
const cors = require("cors")

serv.use(cors());
serv.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Lukin009*",
    database: "likes"
})

serv.post("/create", (req, res) => {
    const likes = req.body.num_of_likes;

    db.query(
        "INSERT INTO likes_counter (num_of_likes) VALUES (?)", [likes],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
    );

})

serv.put("/update", (req, res) => {
    const likes = req.body.num_of_likes

    db.query("UPDATE likes_counter SET num_of_likes = ?", [likes], 
    (err, result) => {
        if(err) {
            console.log(err);
    
        } else {
            res.send(result);
    }}
    )
})

serv.get("/likes_counter", (req, res) => {
    db.query("SELECT * FROM likes_counter", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

serv.listen(3001, () => {
    console.log("Running on 3001");
})

// const { Client } = require("pg");
// const client = new Client(process.env.DATABASE_URL)
// client.connect();
// client.listen(3001, () => {
//     console.log("Running on 3009");
// })