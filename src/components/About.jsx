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
}

export default About;
