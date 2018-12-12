var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static('public'));
app.use('/src', express.static('src'));

app.listen(8081, function () {
  console.log('app listening on port 8081');
});
