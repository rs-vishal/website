import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import coin from '../assets/hero-2.png';
import about from '../assets/about.png';

function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            {/* Header */}
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h1 className="display-4 mb-3 animated slideInDown">About Us</h1>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <img
                                className="img-fluid"
                                src={coin}
                                alt="Coin"
                            />
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
                                <p className="text-primary fs-5 mb-4">The Most Trusted Cryptocurrency Platform</p>
                                <p>
                                    (COMPANY NAME) was established by a dedicated team of blockchain and sustainability enthusiasts united by a common goal: leveraging technology to create a positive environmental impact. Our diverse backgrounds in sustainable technology, green energy solutions, and finance allow us to offer trusted resources, education, and tools for individuals passionate about making a meaningful difference for the planet.
                                </p>
                                <p>
                                    We are committed to empowering users to engage in sustainable initiatives through blockchain. We believe that this innovative technology can serve as a pathway to a sustainable future. By participating in our platform, users not only contribute to vital environmental causes but also gain access to exclusive benefits such as rewards, transparent tracking of eco-friendly projects, and insights into green investments.
                                </p>
                                <p>
                                    We envision a community that is both empowered and dedicated to fostering a greener planet, driving meaningful change while creating real value for all. Together, we can build a brighter, more sustainable future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default About;
