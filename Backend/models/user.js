import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    temzid: { type: String, required: true},
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    countryCode: { type: String, required: true },
    phonenumber: { type: String, required: true, unique: true }, // Change to String
});

export default mongoose.model('User', userSchema);
