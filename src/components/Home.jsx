// Home.js
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import video from "../assets/bitcoin.mp4";
import about from "../assets/about.png";
import stats1 from "../assets/icon-9.png";
import stats2 from "../assets/icon-10.png";
import stats3 from "../assets/icon-2.png";
import whyus1 from "../assets/icon-7.png";
import whyus2 from "../assets/icon-6.png";
import whyus3 from "../assets/icon-5.png";
import whyus4 from "../assets/icon-4.png";
import whyus5 from "../assets/icon-3.png";
import whyus6 from "../assets/icon-8.png";
import Navbar from "./Navbar";

const Home = () => {
  const [todayTransaction, setTodayTransaction] = useState();
  const [monthlyTransaction, setMonthlyTransaction] = useState();
  const [totalTransaction, setTotalTransaction] = useState();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar/>
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

      {/* Stats */}
      <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-4 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="display-4">123456</h1>
              <p className="fs-5 text-primary mb-0">Today Transactions</p>
            </div>
            <div
              className="col-lg-4 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1 className="display-4">123456</h1>
              <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
            </div>
            <div
              className="col-lg-4 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h1 className="display-4">123456</h1>
              <p className="fs-5 text-primary mb-0">Total Transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '500px' }}>
            <h1 className="display-6">Why Us!</h1>
            <p className="text-primary fs-5 mb-5">The Best In The Crypto Industry</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h5 className="mb-3">Easy To Start</h5>
              <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <h5 className="mb-3">Safe & Secure</h5>
              <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
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
