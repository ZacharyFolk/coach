const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.post(
  '/api/user/create',
  (req, res, next) => {
    req.on('data', (chunk) => {
      req.body = JSON.parse(chunk);
      next();
    });
  },

  (req, res) => {
    res.send(req.body);
  }
);

app.get('/', (req, res) => {
  res.send('<h1>hi ys</h1>');
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
