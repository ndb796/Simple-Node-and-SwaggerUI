var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/adder', function (req, res) {
  let one = req.query.one;
  let two = req.query.two;
  let result = Number(one) + Number(two);
  res.send(String(result));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});