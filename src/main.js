const request_utils = require('./requests_utils')
const send_response = request_utils.send_response
const handlers_ranked = require('./handlers/parse')

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  send_response(res, message='Miau =^._.^= /')
});

app.get('/agus', function(req, res) {
  send_response(res, message='ʕ•㉨•ʔ')
});

app.get('/vale', function(req, res) {
  send_response(res, message='≧◉ᴥ◉≦')
});

app.get('/ale', function(req, res) {
  send_response(res, message='(つ▀¯▀)つ')
});

// Parse raw input -> return list of nametags
app.post('/get-players', function(req, res) {
  console.log(req.body)
  handlers_ranked.parse_raw(req.body.raw_data)
  send_response(res, message='Hmmm UWU')
})

// GET Last 5 games
app.get('/:user/last-games', function(req, res) {
  // req.params.user
  ;
})

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000...");
});
