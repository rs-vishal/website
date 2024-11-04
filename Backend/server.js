import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Check required environment variables
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    console.error('Error: Missing environment variables');
    process.exit(1);
}

const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Use authentication routes
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
