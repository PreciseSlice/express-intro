const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/json', (request, response) => {
  response.sendFile('data.json', { root: 'public' });
});

app.get('/sunsets', (request, response) => {
  response.sendFile('sunset.html', { root: 'public' });
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(function(req, res, next) {
  res.status(404).sendFile('fourZeroFour.html', { root: 'public' });
});
