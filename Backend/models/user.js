import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  temzid: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  countryCode: { type: Number, required: true, unique: false },
  phonenumber: { type: Number, required: true, unique: true },

});

export default mongoose.model('User', userSchema);
