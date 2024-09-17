import React from 'react';

// Replace with your background image URL
const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1517487881594-e9e4b5d1d9d8?fit=crop&w=1920&h=1080';

function SignUp() {
  return (
    <div
      className="relative mt-10 min-h-screen flex items-center justify-center bg-gray-900"
      style={{
        backgroundImage: `url(${'https://img.freepik.com/premium-photo/built-structures-against-clear-sky_1048944-28123492.jpg?ga=GA1.2.1824573526.1723610953&semt=ais_hybrid'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-12 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          Sign Up
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-white mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-white mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
