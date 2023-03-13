const User = require('./../model/user');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  console.log('user ', user);

  if (user) {
    return res
      .status(400)
      .json({ success: false, error: 'This email already exists!' });
  }
  const newUser = new User({
    name,
    email,
    password,
  });

  await newUser.save();
  console.log('User saved');
  res.send(newUser);
};
