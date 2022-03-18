const express = require('express');
const app = express()
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

const sql = `insert into people(name) value('Luan')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});