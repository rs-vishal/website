import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

function generateReferralId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

// Register route
router.post('/register', async (req, res) => {
    const { existingtemzid, name, email, password, countryCode, phonenumber } = req.body;

    // Basic validation for required fields
    if (!email || !password || !name || !existingtemzid ){
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const temzid = generateReferralId();
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            existingtemzid,
            temzid,
    
            name,
            email,
            password: hashedPassword,
            countryCode,
            phonenumber
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', temzid});
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing email or password' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: 'JWT_SECRET is not set in environment variables' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: _, ...userData } = user.toObject();

        res.status(200).json({ token, user: userData, message: 'Login successful' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
