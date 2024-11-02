import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import coin from '../assets/hero-2.png';

export default function MissionVision() {
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
                            <h1 className="display-4 mb-3 animated slideInDown">Mission & Vision</h1>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <img
                                className="img-fluid"
                                style={{ animationDuration: '3s' }}
                                src={coin}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '500px' }}>
                        <h1 className="display-6">Mission & Vision</h1>
                        <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-delay="100">
                            <h5>MISSION</h5>
                            <p>
                                (COMPANY NAME) aims to deliver cutting-edge services and products that enable our clients to 
                                maximize the benefits of sustainable technology and practices for a healthy world.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="300">
                            <h5>VISION</h5>
                            <p>
                                (COMPANY NAME) aims to drive the worldwide transition to a more accessible, secure, and 
                                decentralized environmental future. We envisage a society in which sustainable technology empowers 
                                individuals and organizations, breaking down old environmental barriers and encouraging ecological 
                                participation for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
