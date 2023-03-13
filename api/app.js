const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.post(
  '/api/user/create',

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
