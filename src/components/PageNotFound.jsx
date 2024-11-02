import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import logo from "../assets/hero-2.png";
const PageNotFound = () => {
  useEffect(() => {
    // Spinner logic can be handled here
    const spinner = setTimeout(() => {
      const spinnerElement = document.getElementById("spinner");
      if (spinnerElement) {
        spinnerElement.classList.remove("show");
      }
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(spinner);
  }, []);

  return (
    <div>
      {/* Header Start */}
      <div className="bg-light py-20 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl mb-4">404 Error</h1>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2">
                <li>
                  <Link to="/" className="text-primary m-0 text-2xl">
                    Home /
                  </Link>
                </li>
                <li className="text-gray-600 m-0 text-2xl"> 404 Error</li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6">
            <img 
                className="img-fluid animate-fadeIn animate-pulse" 
                src={logo}
                alt="" 
            />
        </div>
        </div>
      </div>
      {/* Header End */}

      {/* 404 Start */}
      <div className="py-20">
        <div className="text-center">
          <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
          <h1 className="display-1">404</h1>
          <h3 className="mb-4 display-6">Page Not Found</h3>
          <p className="mb-4">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <Link to="/" className="bg-sky-400 text-white py-2 px-4 rounded">
            Go Back To Home
          </Link>
        </div>
      </div>
      {/* 404 End */}

      {/* Footer Start */}
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
            {/* Middle Section Content Here */}
          </div>
          <div className="flex-1 min-w-250px p-5 text-right">
            <h3 className="font-bold text-black">Contact Us</h3>
            <p>Phone: +44 20 7123 4567</p>
            <p>Email: cc@gmail.com</p>
            <p>Address: UK, London</p>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to Top */}
      <a
        href="#"
        className="fixed bottom-10 right-10 bg-blue-500 text-white rounded-full p-3 shadow-lg"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default PageNotFound;
