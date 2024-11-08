import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bglog4.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    existingtemzid: "",
    name: "",
    email: "",
    password: "",
    countryCode: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form validation
    if (!formData.existingtemzid) {
      setError("Existing TEMZ ID is required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError(""); // Clear any previous errors
  
    try {
      const response = await axios.post(`${API_URL}/register`, {
        existingtemzid: formData.existingtemzid,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        countryCode: formData.countryCode,
        phonenumber: formData.phoneNumber,
      });
  
      console.log("Success:", response.data);
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      // Check if error.response is available, which indicates backend error
      if (error.response) {
        // Backend error response with a message
        setError(error.response.data.message || "An error occurred");
      } else if (error.request) {
        // Request made but no response received
        setError("No response received from server. Please try again later.");
      } else {
        // Other errors (e.g., setup errors)
        setError("An error occurred while setting up the request.");
      }
  
      console.error("Error:", error);
    }
  };
  

  return (
    <div>
      <div className=" absolute w-full">
      <Navbar/>
      </div>
    <div className="text-black relative min-h-screen flex items-center justify-end overflow-hidden">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{
          position: "absolute",
          width: "50vw",
          height: "50vh",
          top: 200,
          left: 60,
        }}
      />

      <div className="relative w-full max-w-lg p-8 bg-gray-500 bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg mr-56">
        <h2 className="text-3xl font-semibold font-arima text-center">
          Register
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium"
              htmlFor="existingtemzid"
            >
              Existing TEMZ ID
            </label>
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
            <label className="block text-sm font-medium" htmlFor="name">
              Name
            </label>
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
            <label className="block text-sm font-medium" htmlFor="email">
              E-mail
            </label>
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
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <fieldset className="flex items-center mt-3">
            <label className="block text-sm font-medium" htmlFor="phone">
              Phone Number
            </label>
            <div className="ml-3 flex-grow flex items-center">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="bg-white border border-white rounded-lg text-black mr-2 p-1 w-24 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" disabled>
                  Select country code
                </option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+91">+91 (India)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+86">+86 (China)</option>
                <option value="+55">+55 (Brazil)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+27">+27 (South Africa)</option>
                <option value="+62">+62 (Indonesia)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+52">+52 (Mexico)</option>
                <option value="+30">+30 (Greece)</option>
                <option value="+45">+45 (Denmark)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+43">+43 (Austria)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+47">+47 (Norway)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+421">+421 (Slovakia)</option>
                <option value="+36">+36 (Hungary)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+381">+381 (Serbia)</option>
                <option value="+386">+386 (Slovenia)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+972">+972 (Israel)</option>
                <option value="+63">+63 (Philippines)</option>
                <option value="+64">+64 (New Zealand)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+66">+66 (Thailand)</option>
                <option value="+63">+63 (Philippines)</option>
                <option value="+20">+20 (Egypt)</option>
                <option value="+964">+964 (Iraq)</option>
                <option value="+90">+90 (Turkey)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+975">+975 (Bhutan)</option>
                <option value="+92">+92 (Pakistan)</option>
                <option value="+880">+880 (Bangladesh)</option>
                <option value="+961">+961 (Lebanon)</option>
                <option value="+962">+962 (Jordan)</option>
                <option value="+973">+973 (Bahrain)</option>
                <option value="+218">+218 (Libya)</option>
                <option value="+996">+996 (Kyrgyzstan)</option>
                <option value="+995">+995 (Georgia)</option>
                <option value="+374">+374 (Armenia)</option>
                <option value="+7">+7 (Kazakhstan)</option>
                <option value="+423">+423 (Liechtenstein)</option>
                <option value="+352">+352 (Luxembourg)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+372">+372 (Estonia)</option>
                <option value="+371">+371 (Latvia)</option>
                <option value="+370">+370 (Lithuania)</option>
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
            Already have an account?{" "}
            <a
              href="login"
              className="font-medium text-orange-500 hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
