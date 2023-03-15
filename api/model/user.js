const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: '',
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// listen for save function and first run this callback function and hash password with bcrypt
// this will run the first time or if the password is ever updated
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
  }
  next();
});

// static method to use with User class (like default save() method for example)

userSchema.methods.comparePassword = async function (password) {
  const result = await bcrypt.compareSync(password, this.password);
  return result;
};

module.exports = mongoose.model('User', userSchema);
