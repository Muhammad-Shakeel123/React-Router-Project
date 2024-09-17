import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/sunset-beach_1150-15940.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in-down">
          Contact Us
        </h1>
        <form className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white text-black placeholder-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white text-black placeholder-gray-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-white text-black placeholder-gray-600"
          />
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105">
            Send Message
          </button>
        </form>
        <Link
          to="/home"
          className="mt-8 inline-block text-blue-400 hover:text-blue-300"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;
