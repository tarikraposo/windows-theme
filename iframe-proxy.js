const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  request(url).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
