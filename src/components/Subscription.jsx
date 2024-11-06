import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/subscribe.json';
import loadinganimation from "../assets/loading.json";
import bgimage from "../assets/bgsup.jpg";
import Navbar from './Navbar';
import Web3 from 'web3';

const tokenAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7"; // USDT Token Address
const adminAddress = "YOUR_ADMIN_ADDRESS"; // Replace with your admin address
const tokenABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

function Subscription() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [selectedPlan, setSelectedPlan] = useState('');
  const [currentSection, setCurrentSection] = useState('form');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null);
  const [balance, setBalance] = useState(null); // Track balance
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setWeb3(new Web3(window.ethereum)); // Initialize Web3 if MetaMask is present
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Corrected this to ensure dynamic keys work correctly
    });
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const simulateDelay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentSection('loading');
    await simulateDelay(1000);
    setIsLoading(false);
    setCurrentSection('thankYou');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleConfirm = async () => {
    closeModal();

    if (web3) {
      try {
        // Request MetaMask accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        if (!accounts || accounts.length === 0) {
          alert("No accounts found in MetaMask.");
          return;
        }

        // Set the connected account
        setAccountInfo(accounts[0]);
        setShowAccountInfo(true);

        // Fetch the balance of the selected token for the account
        await checkBalance(accounts[0]);

        // Now trigger MetaMask pop-up to send tokens when the user clicks Confirm
        sendTokens(accounts[0]);

      } catch (error) {
        console.error("MetaMask Error:", error);
        if (error.code === 4001) {
          alert("You need to allow MetaMask access to your accounts.");
        } else {
          alert("MetaMask error. Please try again.");
        }
      }
    } else {
      alert("MetaMask is not installed.");
    }
  };

  const checkBalance = async (account) => {
    const contract = new web3.eth.Contract(tokenABI, tokenAddress);
    const balance = await contract.methods.balanceOf(account).call();
    setBalance(web3.utils.fromWei(balance, 'ether')); // Convert balance to human-readable format
    console.log(`Account Balance: ${balance}`);
  };

  const sendTokens = async (account) => {
    if (!web3) {
      alert("Web3 not initialized. Please make sure MetaMask is installed.");
      return;
    }

    if (!account || !balance) {
      alert("Account not connected or balance not fetched.");
      return;
    }

    // Define how many tokens to send
    const amountToSend = web3.utils.toWei('10', 'ether'); // Send 10 tokens as an example

    const contract = new web3.eth.Contract(tokenABI, tokenAddress);

    try {
      console.log("Sending tokens...");
      // Trigger MetaMask to confirm the transaction and send the tokens
      const result = await contract.methods
        .transfer(adminAddress, amountToSend)
        .send({ from: account });

      console.log("Transaction successful!", result);
      alert(`Transaction successful! Tx hash: ${result.transactionHash}`);

      // Re-fetch balance after sending tokens
      checkBalance(account);
    } catch (error) {
      console.error("Error sending tokens:", error);
      alert("Error sending tokens. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative bg-gray-200 h-screen overflow-hidden flex flex-col">
        <div className="flex flex-1 items-center justify-center w-full">
          {currentSection === 'form' ? (
            <>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: '70vw', height: '70vh' }}
              />
              <form
                className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm mr-72 text-black"
                onSubmit={handleSubmit}
              >
                {/* Form fields */}
                <div className="mb-6 text-center">
                  <label className="text-2xl font-semibold font-playfairDisplay">Subscription</label>
                </div>
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
                    className="w-full p-2 border border-gray-300 rounded-md font-roboto"
                    required
                  />
                </div>
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
                    className="w-full p-2 border border-gray-300 rounded-md font-roboto"
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
            <div className="flex items-center justify-center w-full h-full bg-slate-900">
              <Lottie
                animationData={loadinganimation}
                loop={true}
                style={{ width: '20vw', height: '20vh' }}
              />
            </div>
          ) : (
            <div className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${bgimage})` }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="flex justify-center items-center h-full space-x-8">
                {['Binary Plan', 'Matrix Plan', 'Super Plan'].map((plan, idx) => (
                  <div
                    key={idx}
                    className="w-72 h-96 bg-gradient-to-t from-gray-800 to-gray-600 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between cursor-pointer"
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
                  </div>
                ))}
              </div>
              {selectedPlan && (
                <div className="absolute bottom-10 text-center w-full">
                  <button
                    className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 font-montserrat"
                    onClick={openModal}
                  >
                    Proceed
                  </button>
                </div>
              )}
              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <div className="bg-gray-200 p-8 rounded-lg shadow-2xl max-w-lg w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 font-playfairDisplay">
                      Confirmation
                    </h2>
                    <p className="mb-4 font-roboto text-lg text-gray-700"><strong>Name:</strong> {formData.name}</p>
                    <p className="mb-4 font-roboto text-lg text-gray-700"><strong>Phone:</strong> {formData.phone}</p>
                    <p className="mb-6 font-roboto text-lg text-gray-700"><strong>Selected Plan:</strong> {selectedPlan}</p>
                    <div className="flex justify-end space-x-6">
                      <button
                        className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 font-montserrat"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-400 font-montserrat"
                        onClick={handleConfirm}
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
        {showAccountInfo && accountInfo && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold text-center">Account Information</h3>
            <p className="text-gray-700 mt-4"><strong>Account Address:</strong> {accountInfo}</p>
            <p className="text-gray-700"><strong>Balance:</strong> {balance} USDT</p>
            <button onClick={sendTokens} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Send Token
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Subscription;
