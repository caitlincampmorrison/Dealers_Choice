const express = require("express");
const app = express();
const list = require("./views/list");
const details = require("./views/details");
const path = require('path');
const pg = require('pg')
const db = require('./db');
const client = db.client;

app.get("/", async(req, res, next) => {
    try {
        const SQL = `SELECT * FROM tasks`;
        const response = await client.query(SQL);
        const posts = response.rows
        res.send(list(posts))
    }
    catch(ex) { next(ex); }
   
})

app.get('/posts/:id', async(req, res, next) => {
    try {
        const SQL = `SELECT * FROM tasks WHERE tasks.id = $1`;
        const response = await client.query(SQL, [ req.params.id ]);
        if(response.rows.length === 0){
            throw Error('does not exist');
        }
        const post = response.rows[0]
        res.send(details(post))
    }
    catch(ex) { next(ex); }
 })
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port${port}'))