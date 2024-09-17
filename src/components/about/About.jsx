import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
          About This Project
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-2xl">
          This project demonstrates how React Router works to build dynamic
          multi-page applications, providing smooth navigation and component
          rendering.
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Explore how React and Tailwind CSS work together to create modern,
          responsive web applications.
        </p>
        <Link
          to="/contactus"
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default About;
