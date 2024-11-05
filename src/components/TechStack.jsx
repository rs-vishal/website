import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import coin from '../assets/hero-2.png';
import whyus1 from "../assets/icon-7.png";
import whyus2 from "../assets/icon-6.png";
import stats1 from "../assets/icon-9.png";

export default function TechStack() {
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
                            <h1 className="display-4 mb-3 animated slideInDown">TechStack</h1>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <img
                                className="img-fluid animate-fadeIn animate-pulse" 
                                style={{ animationDuration: '3s' }}
                                src={coin}
                                alt="Coin"
                            />
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

                    <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                        <p>
                            Blockchain technology enables transparent protection and confidence when processing transactions
                            in our sustainable energy initiative. Users benefit from instant verification and the immutability
                            of their assets since control is decentralized. This empowers individuals while also promoting a
                            sustainable future.
                        </p>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="TechStack-item bg-light p-5">
                                <img className="img-fluid mb-4" src={whyus2} alt="Guaranteed Security" />
                                <h5 className="mb-3">Guaranteed Security</h5>
                                <p>Your data's security is our top priority. With a decentralized design, you keep control of your 
                                   data, ensuring there are no more main points of vulnerability by us.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="TechStack-item bg-light p-5">
                                <img className="img-fluid mb-4" src={stats1} alt="Best Exchange Rates" />
                                <h5 className="mb-3">Best Exchange Rates</h5>
                                <p>Access a global experience. Geographic boundaries are not a restriction when employing 
                                   decentralization. Engage with persons, information, and services from across the world.</p>
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

            {/* Footer */}
            {/* Uncomment and customize footer if needed */}
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
