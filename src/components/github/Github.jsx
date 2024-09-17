import React from 'react';
import { useLoaderData } from 'react-router-dom';

// Component to display GitHub user information
function Github() {
  // Fetch the data using useLoaderData
  const data = useLoaderData();

  // Default values in case of missing or undefined data
  const {
    avatar_url: avatarUrl = 'https://via.placeholder.com/128', // Fallback image
    name = 'No Name',
    bio = 'No Bio Available',
    location = 'Unknown Location',
    followers = 'N/A',
    following = 'N/A',
    public_repos: publicRepos = 'N/A',
    html_url: profileUrl = '#',
  } = data || {}; // Default to empty object if data is undefined

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center text-white py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1485689154738-bd29e5582b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUyOXwwfDF8c2VhcmNofDJ8fGJhY2tncm91bmR8ZW58MHx8fDE2NzA3NTI3Nz&ixlib=rb-1.2.1&q=80&w=1080')",
      }}
    >
      <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <img
          className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto mb-4 transform transition-transform duration-300 hover:scale-110"
          src={avatarUrl}
          alt="GitHub Avatar"
        />
        <h1 className="text-4xl font-extrabold mb-2">{name}</h1>
        <p className="text-lg mb-4">{bio}</p>
        <p className="text-md mb-4">Location: {location}</p>
        <p className="text-md mb-4">Followers: {followers}</p>
        <p className="text-md mb-4">Following: {following}</p>
        <p className="text-md mb-4">Public Repos: {publicRepos}</p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-l text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

// Loader function for fetching GitHub data
export const githubInfoLoader = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/users/Muhammad-Shakeel123',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {}; // Return an empty object to prevent the app from crashing
  }
};
