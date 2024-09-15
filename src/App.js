import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChatBot from './chatBot';
import LoginModal from './LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">ANILAO</h1>
            <div>
              <a href="#about" className="px-4">About</a>
              <a href="#services" className="px-4">Services</a>
              <a href="#contact" className="px-4">Contact</a>              
              {/* Login Button */}
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded ml-4" 
                onClick={openLoginModal}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-5xl font-bold">Welcome to Anilao System Website</h2>
        <p className="text-xl mt-4">We are here to serve you today.You may explore this page for more.</p>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center">We are passionate about creating beautiful and functional websites.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold">Services</h3>
              <p className="mt-4">See documents you can request</p>
            </div>
            <div className="bg-white p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold">Information</h3>
              <p className="mt-4">See the latest events of out Town</p>
            </div>
            <div className="bg-white p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold">Officials</h3>
              <p className="mt-4">See the current Officials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto mt-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="w-full p-3 border border-gray-300 rounded-md" id="name" type="text" placeholder="Your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="w-full p-3 border border-gray-300 rounded-md" id="email" type="email" placeholder="Your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="w-full p-3 border border-gray-300 rounded-md" id="message" placeholder="Your message" rows="5"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md" type="submit">Send Message</button>
        </form>
      </section>

      {/* ChatBot */}
      <ChatBot />
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

    </div>
  );
}

export default App;
