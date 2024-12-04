const express = require('express');
const app = express();
const port = 3000;
const path = require("assets/vendidos/vendidos.txt");

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '../dist/sorteos')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/sorteos/index.html'));
});