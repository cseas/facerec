const express = require('express')
const app = express()
var path = require('path');
var base64Img = require('base64-img');
var bodyParser     =         require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: 'D:/Python27/python.exe',
  pythonOptions: ['-u'],
  scriptPath: 'public/pyfacescmd',
  args: ['public/pyfacescmd/pyfacesdemo/Uday_input.png', 'public/pyfacescmd/pyfacesdemo/images', 4,3]
};

PythonShell.run('pyfacesdemo', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results[results.length-2]);
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

app.get('/node_modules/material-components-web/dist/material-components-web.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/node_modules/material-components-web/dist/material-components-web.css'));
});
app.get('/node_modules/material-components-web/dist/material-components-web.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/node_modules/material-components-web/dist/material-components-web.js'));
});

app.listen(3000, function () {
  console.log('Authar app running on 3000!')
})
app.post('/auth', function (req, res) {


base64Img.img(req.body.data, 'public/images', '1', function(err, filepath) {});

})

app.use('/public', express.static(path.join(__dirname, '/public')));

