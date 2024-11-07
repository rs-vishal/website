// Home.js
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import video from "../assets/bitcoin.mp4";
import about from "../assets/about.png";
import Navbar from "./Navbar";
import Web3 from 'web3'; // Import Web3 for MetaMask integration

const Home = () => {
  const [todayTransaction, setTodayTransaction] = useState(0);
  const [monthlyTransaction, setMonthlyTransaction] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true'); 
  }, []);

  // Fetch transaction data from an API or some source
  useEffect(() => {
    AOS.init();

    // Mock API call (replace with real API)
    const fetchTransactionData = async () => {
      try {
        const response = await fetch("/api/transactions");
        const data = await response.json();
        setTodayTransaction(data.today);
        setMonthlyTransaction(data.monthly);
        setTotalTransaction(data.total);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
  }, []);

  // Connect function for MetaMask
  const Connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        console.log("Connected to MetaMask:", web3);
      } catch (error) {
        console.error("User denied account access:", error);
      }
    } else {
      alert("MetaMask is not installed!")
      console.log("MetaMask is not installed!");
    }
  };

  return (
    <div>
      <Navbar />
      {/* Header */}
      <div
        className="container-fluid hero-header mb-5"
        style={{
          backgroundColor: "#000000",
          position: "relative",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <video
          className="position-absolute top-0 start-0"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        ></div>
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row g-5">
            <div className="col-lg-6 text-center" data-aos="fade-up">
              <h1 className="display-4 mb-3 animated slideInDown text-white">
                Empowering Sustainable Change for Tomorrow
              </h1>
              <p className="animated slideInDown text-white">
                Your Gateway to a Greener Future... Harness the power of
                sustainable solutions to drive positive change and support our
                planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Button Section */}
      <div className="d-flex justify-content-center mt-3" id="connect-section">
      {isAuthenticated && (
            <input
            id="connect"
            type="button"
            value="Connect"
            className="btn btn-primary"
            onClick={Connect}
          />
          )}
      </div>

      {/* About */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img className="img-fluid" src={about} alt="About Us" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="h-100">
                <h1 className="display-6">About Us</h1>
                <p className="text-primary fs-5 mb-4">
                  The Most Trusted Cryptocurrency Platform
                </p>
                <p>
                  (COMPANY NAME) was established by a dedicated team of
                  blockchain and sustainability enthusiasts united by a common
                  goal: leveraging technology to create a positive environmental
                  impact. Our diverse backgrounds in sustainable technology,
                  green energy solutions, and finance allow us to offer trusted
                  resources, education, and tools for individuals passionate
                  about making a meaningful difference for the planet.
                </p>
                <p>
                  We are committed to empowering users to engage in sustainable
                  initiatives through blockchain. We believe that this
                  innovative technology can serve as a pathway to a sustainable
                  future. By participating in our platform, users not only
                  contribute to vital environmental causes but also gain access
                  to exclusive benefits such as rewards, transparent tracking of
                  eco-friendly projects, and insights into green investments.
                </p>
                <p>
                  We envision a community that is both empowered and dedicated
                  to fostering a greener planet, driving meaningful change while
                  creating real value for all. Together, we can build a
                  brighter, more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <footer className="bg-blue-50 text-black py-10">
                <div className="max-w-7xl mx-auto flex justify-between flex-wrap">
                    <div className="flex-1 min-w-250px p-5">
                        <img src="logo.png" alt="Logo" className="w-12 mb-2" />
                        <p>
                            companyname was founded by a team of passionate cryptocurrency
                            enthusiasts with a shared vision.
                        </p>
                        <p>&copy; 2024 companyname. All Rights Reserved.</p>
                    </div>
                    <div className="flex-1 min-w-250px p-5 text-center">
                    </div>
                    <div className="flex-1 min-w-250px p-5 text-right">
                        <h3 className="font-bold text-black">Contact Us</h3>
                        <p>Phone: +44 20 7123 4567</p>
                        <p>Email: cc@gmail.com</p>
                        <p>Address: UK, London</p>
                    </div>
                </div>
            </footer>
    </div>
  );
};

export default Home;