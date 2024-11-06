import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/subscribe.json';
import loadinganimation from "../assets/loading.json";
import bgimage from "../assets/bgsup.jpg";
import Navbar from './Navbar';

function Subscription() {
  const [formData, setFormData] = useState({
    teamzid: '', // Corrected the initial state for teamzid
    name: '', // Changed from username to name
    phone: '',
  });

  const [selectedPlan, setSelectedPlan] = useState(''); // Track selected plan
  const [currentSection, setCurrentSection] = useState('form'); // To track the current section
  const [isLoading, setIsLoading] = useState(false); // To track loading state
  const [showModal, setShowModal] = useState(false); // To track the modal visibility

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Corrected this to ensure dynamic keys work correctly
    });
  };

  // Handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Simulate a delay without using setTimeout
  const simulateDelay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // Handle form submit to move to the next section
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Selected Plan:', selectedPlan);

    // Immediately change to loading screen
    setIsLoading(true);
    setCurrentSection('loading');

    await simulateDelay(500);

    // After delay, hide loading screen and show the thank you page
    setIsLoading(false);
    setCurrentSection('thankYou');
  };

  // Handle modal close
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle modal open
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-r from-gray-500 via-gray-400 to-gray-200 h-screen overflow-hidden flex flex-col">
      {/* Main container for row layout */}
        <div className="flex flex-1 items-center justify-center w-full">
          {currentSection === 'form' ? (
            <>
              {/* Lottie animation for the main form animation */}
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: '70vw', height: '70vh' }}
              />

              {/* Subscription Form */}
              <form
  className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-2xl w-full max-w-sm mr-72 text-black"
  onSubmit={handleSubmit}
>
  <div className="mb-6 text-center">
    <label className="text-2xl font-semibold font-playfairDisplay">Subscription</label>
  </div>

  {/* Teamz-ID Input */}
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-2" htmlFor="teamzid">
      Teamz-ID
    </label>
    <input
      type="text"
      name="teamzid"
      id="teamzid"
      
      value={formData.teamzid}
      onChange={handleChange}
      className="w-full py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
      required
    />
  </div>

  {/* Name Input */}
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-2" htmlFor="name">
      Name:
    </label>
    <input
      type="text"
      name="name"
      id="name"
      value={formData.name}
      onChange={handleChange}
      placeholder='Enter name'
      className="w-full placeholder-gray-300 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
      required
    />
  </div>

  {/* Phone Input */}
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-2" htmlFor="phone">
      Phone no:
    </label>
    <input
      type="text"
      name="phone"
      id="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-montserrat"
  >
    Next
  </button>
</form>

            </>
          ) : currentSection === 'loading' ? (
            // Loading screen visible for 2 seconds
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-80">
              <Lottie
                animationData={loadinganimation}
                loop={true}
                style={{ width: '20vw', height: '20vh' }}
              />
            </div>
          ) : (
            // Thank you page with subscription plans
            <div className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${bgimage})` }}>
              {/* Overlay with opacity */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="flex justify-center items-center h-full space-x-8">
                {/* Plan Cards */}
                {['Binary Plan', 'Matrix Plan', 'Super Plan'].map((plan, idx) => (
                  <div
                    key={idx}
                    className="w-72 h-96 bg-gradient-to-t from-gray-800 to-gray-600 bg-opacity-70 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between cursor-pointer"
                    onClick={() => handlePlanSelect(plan)}
                  >
                    <div>
                      <h2 className="text-2xl font-semibold text-white font-playfairDisplay">{plan}</h2>
                      <p className="mt-2 text-gray-300 font-roboto">Description for {plan}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p className="text-lg font-semibold text-white font-montserrat">Price:</p>
                      <p className="text-lg font-semibold text-white font-montserrat">5000</p>
                    </div>
                    <button className="mt-6 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 font-montserrat">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>

              {/* Proceed Button */}
              {selectedPlan && (
                <div className="absolute bottom-10 text-center w-full">
                  <button
                    className="py-2  px-6 bg-green-600 text-white rounded-md hover:bg-green-700 font-montserrat"
                    onClick={openModal}
                  >
                    Proceed
                  </button>
                </div>
              )}

              {/* Modal */}
              {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <div className="bg-gray-200 p-8 rounded-lg shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-105 hover:scale-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 font-playfairDisplay">
        Confirmation
      </h2>

      {/* Display Name, Phone, Teamz-ID, and Selected Plan */}
      <p className="mb-4 font-roboto text-lg text-gray-700">
        <strong>Name:</strong> {formData.name}
      </p>
      <p className="mb-4 font-roboto text-lg text-gray-700">
        <strong>Phone:</strong> {formData.phone}
      </p>
      <p className="mb-4 font-roboto text-lg text-gray-700">
        <strong>Teamz-ID:</strong> {formData.teamzid} {/* Added Teamz-ID */}
      </p>
      <p className="mb-6 font-roboto text-lg text-gray-700">
        <strong>Selected Plan:</strong> {selectedPlan}
      </p>

      <div className="flex justify-end space-x-6">
        <button
          className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 font-montserrat transition duration-300 transform hover:scale-105"
          onClick={closeModal}
        >
          Close
        </button>
        <button
          className="bg-green-500 text-white px-6 rounded-lg hover:bg-green-400 font-montserrat transition duration-300 transform hover:scale-105"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
