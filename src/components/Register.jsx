import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/bglog4.json';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    existingtemzid: '',
    name: '',
    email: '',
    password: '',
    countryCode: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.existingtemzid) {
      setError('Existing TEMZ ID is required');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError(''); // Clear any previous errors

    try {
      const response = await axios.post(`${API_URL}/register`, {
        existingtemzid: formData.existingtemzid,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        countryCode: formData.countryCode,
        phonenumber: formData.phoneNumber,
      });
      console.log('Success:', response.data); // Handle success
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError('An error occurred while connecting.'); // Handle error
    }
  };

  return (
    <div className="text-black relative min-h-screen flex items-center justify-end overflow-hidden">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ position: 'absolute', width: '50vw', height: '50vh', top: 200, left: 60 }}
      />

      <div className="relative w-full max-w-lg p-8 bg-gray-500 bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg mr-56">
        <h2 className="text-3xl font-semibold font-arima text-center">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium" htmlFor="existingtemzid">Existing TEMZ ID</label>
            <input
              type="text"
              id="existingtemzid"
              name="existingtemzid"
              value={formData.existingtemzid}
              onChange={handleChange}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Existing TEMZ ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <fieldset className="flex items-center mt-3">
            <label className="block text-sm font-medium" htmlFor="phone">Phone Number</label>
            <div className="ml-3 flex-grow flex items-center">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="bg-white border border-white rounded-lg text-black mr-2 p-1 w-24 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" disabled>Select country code</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+91">+91 (India)</option>
                <option value="+44">+44 (UK)</option>
                {/* Add other country codes as needed */}
              </select>
              <input
                type="text"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Number"
                required
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full flex justify-center py-2 bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700"
          >
            <p>Register</p>
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <a href="login" className="font-medium text-orange-500 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
