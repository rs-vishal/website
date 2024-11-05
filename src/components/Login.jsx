import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/bglog4.json';
import succesanimation from "../assets/sucess.json"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const generateCaptcha = (length) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < length; i++) {
    captcha += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return captcha;
};

const Login = () => {
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(false); // State for success message visibility
  const navigate = useNavigate();

  useEffect(() => {
    setCaptcha(generateCaptcha(6)); // Generate a new CAPTCHA when the component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userCaptcha !== captcha) {
      setCaptchaError(true);
      return;
    }

    // Prepare the login data
    const loginData = { email, password };

    try {
      const response = await axios.post(`${API_URL}/login`, loginData);
      console.log(response.data); 
      
      // Display the success message
      setSuccessMessage(true);

      // Store user session data in local storage
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("username", response.data.user.name);
      localStorage.setItem("usermail", response.data.user.email);
      localStorage.setItem("teamzid", response.data.user.temzid);
      localStorage.setItem("ph-num", response.data.user.phonenumber);

      // Hide success message after 1.5 seconds and navigate to home
      setTimeout(() => {
        setSuccessMessage(false);
        navigate('/'); // Navigate to the home page
      }, 3000); // 1.5 seconds
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        alert('Login failed: ' + error.response.data.message); 
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="relative h-screen bg-white flex items-center justify-end overflow-hidden text-black">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ position: 'absolute', width: '50vw', height: '50vh', top: 200, left: 60 }}
      />

      <div className="relative w-full max-w-lg p-8 bg-gray-500 bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg mr-56">
        <h2 className="text-3xl font-semibold font-arima text-center">Login</h2>

        <form className="mt-6 space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium " htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Password"
              required
            />
          </div>

          {/* CAPTCHA Section */}
          <div className="mt-4 flex items-center">
            <label className="block text-sm font-medium " style={{ fontSize: '0.9rem', marginRight: '0.5rem' }}>
              CAPTCHA: <span className="font-bold">{captcha}</span>
            </label>
            <input
              type="text"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              className={`flex-1 p-2 bg-transparent border ${captchaError ? 'border-red-500' : 'border-white'} rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500`}
              placeholder="Enter CAPTCHA"
              required
              style={{ fontSize: '0.9rem' }}
            />
            {captchaError && <p className="text-red-500 text-sm ml-2">Incorrect CAPTCHA. Please try again.</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
              <span className="ml-2">Remember me</span>
            </label>
            <Link to="/forgot-password" className="hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-orange-500 hover:underline">Register</Link>
        </p>

        {/* Success Message Popup */}

      </div>
      {successMessage && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
  {/* Lottie Animation */}


  {/* Success Message */}
  <div className="p-4 bg-green-500 text-white rounded-lg absolute z-20">
    Login Successful!
  </div>
</div>

        )}
    </div>
  );
};

export default Login;
