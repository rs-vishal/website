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

const Home = () => {
  const [todayTransaction, setTodayTransaction] = useState();
  const [monthlyTransaction, setMonthlyTransaction] = useState();
  const [totalTransaction, setTotalTransaction] = useState();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
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
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Tempor erat elitr rebum at clita</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Tempor erat elitr rebum at clita</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Tempor erat elitr rebum at clita</span>
                </div>
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
              <div className="flex justify-center mb-4">
                <img
                  className="img-fluid mr-[23px]"
                  src={stats1}
                  alt="Today Transactions"
                />
              </div>
              <h1 className="display-4" data-toggle="counter-up">
                123456
              </h1>
              <p className="fs-5 text-primary mb-0">Today Transactions</p>
            </div>
            <div
              className="col-lg-4 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex justify-center mb-4">
                <img
                  className="img-fluid mr-[23px]"
                  src={stats2}
                  alt="Monthly Transactions"
                />
              </div>
              <h1 className="display-4" data-toggle="counter-up">
                123456
              </h1>
              <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
            </div>
            <div
              className="col-lg-4 col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex justify-center mb-4">
                <img
                  className="img-fluid mr-[23px]"
                  src={stats3}
                  alt="Total Transactions"
                />
              </div>
              <h1 className="display-4" data-toggle="counter-up">
                123456
              </h1>
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
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={whyus1} alt="Easy To Start" />
                <div className="ps-4">
                  <h5 className="mb-3">Easy To Start</h5>
                  <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={whyus2} alt="Safe & Secure" />
                <div className="ps-4">
                  <h5 className="mb-3">Safe & Secure</h5>
                  <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={whyus3} alt="Affordable Plans" />
                <div className="ps-4">
                  <h5 className="mb-3">Affordable Plans</h5>
                  <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={whyus4} alt="Secure Storage" />
                <div className="ps-4">
                  <h5 className="mb-3">Secure Storage</h5>
                  <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={whyus5} alt="Protected By Insurance" />
                <div className="ps-4">
                  <h5 className="mb-3">Protected By Insurance</h5>
                  <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={whyus6} alt="24/7 Support" />
                <div className="ps-4">
                  <h5 className="mb-3">24/7 Support</h5>
                  <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TechStack */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '500px' }}>
            <h1 className="display-6">TechStack</h1>
            <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
          </div>

          <div className="text-center mb-5">
            <p>
              Blockchain technology enables transparent, protection, and confidence when processing transactions
              in our sustainable energy initiative. Users benefit from instant verification and the immutability
              of their assets since control is decentralised. This empowers individuals while also promoting a
              sustainable future.
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="TechStack-item bg-light p-5">
                <img className="img-fluid mb-4" src={whyus5} alt="Guaranteed Security" />
                <h5 className="mb-3">Guaranteed Security</h5>
                <p>Your data's security is our top priority. With a decentralised design, you keep control of your
                  data, ensuring there are no more main points of vulnerability by us.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="TechStack-item bg-light p-5">
                <img className="img-fluid mb-4" src={stats1} alt="Best Exchange Rates" />
                <h5 className="mb-3">Best Exchange Rates</h5>
                <p>Access a global experience. Geographic boundaries are not a restriction when employing
                  decentralisation. Engage with persons, information, and services from across the world.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="TechStack-item bg-light p-5">
                <img className="img-fluid mb-4" src={whyus1} alt="Faster Transactions" />
                <h5 className="mb-3">Faster Transactions</h5>
                <p>Regain control of your digital presence. You have complete control over your data in the
                  (COMPANY NAME). Choose who has access to your information and how it is used.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* MissionVision */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '500px' }}>
            <h1 className="display-6">Mission & Vision</h1>
            <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
              <h5>MISSION</h5>
              <p>
                (COMPANY NAME) aims to deliver cutting-edge services and products that enable our clients to
                maximise the benefits of sustainable technology and practices for a healthy world.
              </p>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="300">
              <h5>VISION</h5>
              <p>
                (COMPANY NAME) aims to drive the worldwide transition to a more accessible, secure, and
                decentralised environmental future. We envisage a society in which sustainable technology empowers
                individuals and organisations, breaking down old environmental barriers and encouraging ecological
                participation for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
