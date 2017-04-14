const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.status(200).send('Simple API with Heroku, Node & Travis!');
});

app.listen(process.env.PORT || 8080);

module.exports = app;
