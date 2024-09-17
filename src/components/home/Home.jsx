import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/beautiful-building-near-sea-liverpool-sunset_181624-9056.jpg?ga=GA1.1.1824573526.1723610953&semt=ais_hybrid')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-down text-center">
          Welcome to React Router Project
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl text-center">
          Learn how React Router enables dynamic routing in React applications.
          Navigate between different pages with ease!
        </p>
        <Link
          to="/about"
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-110"
        >
          Go to About Page
        </Link>
      </div>
    </div>
  );
}

export default Home;
