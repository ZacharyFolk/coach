const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// for middleware to parse the JSON payload and return req.body to next()
app.use(express.json());
// error handler for the middleware status 400 if syntax error in JSON otherwise 500 with error object
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({ error: 'Invalid JSON' });
  } else {
    res.status(500).send({ error: err.message });
  }
});

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
