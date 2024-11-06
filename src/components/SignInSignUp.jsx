import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
// import { API_URL } from "@env";

const SignInSignUp = () => {
  const [isActive, setIsActive] = useState(false);

  // Sign Up State
  const [signUpData, setSignUpData] = useState({
    teamId: "",
    name: "",
    email: "",
    password: "",
    countryCode: "+1",
    phoneNumber: "",
  });

  // Sign In State
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [signUpErrors, setSignUpErrors] = useState({});
  const [signInErrors, setSignInErrors] = useState({});

  const validateSignUp = () => {
    const errors = {};
    if (!signUpData.teamId) errors.teamId = "Team ID is required";
    if (!signUpData.name) errors.name = "Name is required";
    if (!signUpData.email) errors.email = "Email is required";
    if (!signUpData.password) errors.password = "Password is required";
    if (!signUpData.phoneNumber)
      errors.phoneNumber = "Phone number is required";
    return errors;
  };

  const validateSignIn = () => {
    const errors = {};
    if (!signInData.email) errors.email = "Email is required";
    if (!signInData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const errors = validateSignUp();
    if (Object.keys(errors).length === 0) {
      console.log("Sign Up Data: ", signUpData);
      setSignUpErrors({});
    } else {
      setSignUpErrors(errors);
    }
  };
  
  const handleSignInaction = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: signInData
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        navigate('/');
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log('Something went wrong. Please try again.');
    }
  };
   
  const hangelesignupaction = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: signUpData
      });
      if (response.data.success) {
        console.log(response.data.message);
        navigate("/login");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error.response.data.message);
      } else {
        console.log("There was an error registering!");
      }
    }
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const errors = validateSignIn();
    if (Object.keys(errors).length === 0) {
      console.log("Sign In Data: ", signInData);
      setSignInErrors({});
    } else {
      setSignInErrors(errors);
    }
  };

  return (
    <div>
      <Navbar/>
    <div
      className={`flex items-center justify-center w-full h-screen ${
        isActive ? "bg-gradient-to-r from-gray-200 to-blue-200" : "bg-gray-100"
      }`}
    >
      <div
        className={`relative w-[70%] h-[70%] bg-white rounded-lg shadow-lg min-h-[480px] overflow-hidden transform transition-all duration-500 mx-auto ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 h-full w-1/2 flex flex-col items-center justify-center px-10 transform transition-all duration-500 ${
            isActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSignUp}
          >
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <input
              type="text"
              placeholder="Team ID"
              value={signUpData.teamId}
              onChange={(e) =>
                setSignUpData({ ...signUpData, teamId: e.target.value })
              }
              className="w-full p-2 mb-2 bg-gray-100 rounded-md"
            />
            {signUpErrors.teamId && (
              <span className="text-red-500">{signUpErrors.teamId}</span>
            )}

            <input
              type="text"
              placeholder="Name"
              value={signUpData.name}
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
              className="w-full p-2 mb-2 bg-gray-100 rounded-md"
            />
            {signUpErrors.name && (
              <span className="text-red-500">{signUpErrors.name}</span>
            )}

            <input
              type="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
              className="w-full p-2 mb-2 bg-gray-100 rounded-md"
            />
            {signUpErrors.email && (
              <span className="text-red-500">{signUpErrors.email}</span>
            )}

            <div className="relative w-full mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                className="w-full p-2 bg-gray-100 rounded-md"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            {signUpErrors.password && (
              <span className="text-red-500">{signUpErrors.password}</span>
            )}

            <div className="flex mb-2 w-full">
              <select
                value={signUpData.countryCode}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, countryCode: e.target.value })
                }
                className="p-2 bg-gray-100 rounded-md w-1/3"
              >
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
                <option value="+41">+41 (Switzerland)</option>
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
                type="tel"
                placeholder="Phone Number"
                value={signUpData.phoneNumber}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, phoneNumber: e.target.value })
                }
                className="w-2/3 p-2 mb-2 bg-gray-100 rounded-md ml-2 h-11"
              />
              {signUpErrors.phoneNumber && (
                <span className="text-red-500">{signUpErrors.phoneNumber}</span>
              )}
            </div>
            <button
              style={{ backgroundColor: "#b75fc8" }}
              className="text-white font-semibold px-6 py-2 rounded-md mt-3"
              onClick={hangelesignupaction}

            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 h-full w-1/2 left-0 flex flex-col items-center justify-center px-10 transform transition-all duration-500 ${
            isActive ? "-translate-x-full opacity-0 z-0" : "opacity-100 z-10"
          }`}
        >
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSignIn}
          >
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>

            {/* Google Icon Button */}
            <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-600 font-semibold px-6 py-2 rounded-md mt-3 mb-2">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign in with Google
            </button>
            <span className="text-sm mb-2">or use your email for login</span>

            <input
              type="email"
              placeholder="Email"
              value={signInData.email}
              onChange={(e) =>
                setSignInData({ ...signInData, email: e.target.value })
              }
              className="w-full p-2 mb-2 bg-gray-100 rounded-md"
            />
            {signInErrors.email && (
              <span className="text-red-500">{signInErrors.email}</span>
            )}

            <div className="relative w-full mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={signInData.password}
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })
                }
                className="w-full p-2 bg-gray-100 rounded-md"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            {signInErrors.password && (
              <span className="text-red-500">{signInErrors.password}</span>
            )}

            <a href="#" className="text-sm text-gray-600 mt-2">
              Forgot Your Password?
            </a>
            <button
              style={{ backgroundColor: "#b75fc8" }}
              className="text-white font-semibold px-6 py-2 rounded-md mt-3"
              onClick={handleSignInaction}
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Panels */}
        <div
          className={`absolute top-0 h-full w-1/2 right-0 overflow-hidden rounded-lg transition-transform duration-500 ${
            isActive ? "-translate-x-full" : ""
          }`}
        >
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">
                {isActive ? "Welcome Back!" : "Hello, Friend!"}
              </h1>
              <p className="text-sm mb-4">
                {isActive
                  ? "Enter your personal details to use all of site features"
                  : "Register with your personal details to use all of site features"}
              </p>
              <button
                onClick={() => setIsActive(!isActive)}
                className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-md mt-3"
              >
                {isActive ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignInSignUp;
