import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

// Replace with your Discord invite link
const DISCORD_INVITE_LINK = 'https://discord.gg/your-server-invite-link';

// Replace with your chosen background image URL
const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1526417914866-f1a8b1c0233f?fit=crop&w=1920&h=1080';

function Discord() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-center p-6"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <FontAwesomeIcon
          icon={faDiscord}
          size="3x"
          className="text-white mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 text-white">Join Our Discord</h1>
        <p className="text-lg mb-6 text-white">
          Connect with our community and stay updated with the latest news and
          discussions. Join us on Discord for support, networking, and fun!
        </p>
        <a
          href={DISCORD_INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}

export default Discord;
