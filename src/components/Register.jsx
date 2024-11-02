import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/bglog4.json';
import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    temzId: '',
    name: '',
    email: '',
    phoneCode: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.temzId) {
      setError('TEMZ ID is required');
      return;
    }

    setError(''); // Clear any previous errors

    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      console.log('Success:', response.data); // Handle success
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError('An error occurred while connecting.'); // Handle error
    }
  };

  return (
    <div className=" text-black relative min-h-screen flex items-center justify-end overflow-hidden">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ position: 'absolute', width: '50vw', height: '50vh', top: 200, left: 60 }}
      />

      <div className="relative w-full max-w-lg p-8 bg-gray-500 bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg mr-56">
        <h2 className="text-3xl font-semibold font-arima text-center ">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium " htmlFor="temz-id">
              TEMZ ID
            </label>
            <input
              type="text"
              id="temz-id"
              name="temzId"
              value={formData.temzId}
              onChange={handleChange}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg  placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Temz ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium " htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg  placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium " htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-3 bg-transparent border border-white rounded-lg  placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
            />
          </div>

          <fieldset className="flex items-center mt-3">
            <label className="block text-sm font-medium " htmlFor="phone">
              Phone Number
            </label>
            <div className="ml-3 flex-grow flex items-center">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="bg-white border border-white rounded-lg text-black mr-2 p-1 w-24 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" disabled>Select country code</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+91">+91 (India)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+86">+86 (China)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+55">+55 (Brazil)</option>
                <option value="+27">+27 (South Africa)</option>
                <option value="+82">+82 (South Korea)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+61">+61 (New Zealand)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+45">+45 (Denmark)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+47">+47 (Norway)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+43">+43 (Austria)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+30">+30 (Greece)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+886">+886 (Taiwan)</option>
              </select>
              <input
                type="text"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-white rounded-lg  placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Number"
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="w-full flex justify-center py-2 bg-orange-500 rounded-lg  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700"
          >
           <p> Connect Wallet</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" ml-5 size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg>

          </button>
          <p className="mt-4 text-center text-sm ">
          Already have an account?{' '}
          <a href="login" className="font-medium text-orange-500 hover:underline">Login</a>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
