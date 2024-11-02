import React from 'react'

export default function Contact() {
  return (
    <div>
       {/* footer  */}
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
    </div>
  )
}
