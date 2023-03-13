const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const User = require('./model/user');
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://192.168.86.26:27017/coach', {
    useNewUrlParser: true,
  })
  .then(() => console.log('db is connected'))
  .catch((err) => console.log(err));

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
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    res.send(newUser);
  }
);

// app.get('/', (req, res) => {
//   res.send('<h1>hi</h1>');
// });

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
