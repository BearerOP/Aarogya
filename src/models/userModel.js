const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'patient', 'superAdmin'],
  },
});

module.exports = mongoose.model('User', userSchema);
