import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Make sure to add the .js extension

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { temzid, name, email, password, countryCode, phonenumber } = req.body;

  try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ temzid, name, email, password: hashedPassword, countryCode, phonenumber });

      // Save the user to MongoDB
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
      console.error('Registration error:', err);
      res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Exclude sensitive information
      const { password: _, ...userData } = user.toObject(); // Convert user document to plain object and exclude password

      res.status(200).json({ token, user: userData, message: 'Login successful' });
  } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Server error' });
  }
});

// Export the router
export default router;
