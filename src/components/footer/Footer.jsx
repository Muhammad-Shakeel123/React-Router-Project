import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faTiktok,
  faSnapchatGhost,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between mb-8">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid" // Replace with your logo URL
              alt="Logo"
              className="h-12 object-contain"
            />
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-12">
            {/* Resources */}
            <div>
              <h2 className="text-lg font-semibold mb-4">RESOURCES</h2>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `text-orange-400 hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-orange-300 font-bold' : ''
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-orange-400 hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-orange-300 font-bold' : ''
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">FOLLOW US</h2>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `text-orange-400 hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-orange-300 font-bold' : ''
                      }`
                    }
                  >
                    GitHub
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/discord"
                    className={({ isActive }) =>
                      `text-orange-400 hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-orange-300 font-bold' : ''
                      }`
                    }
                  >
                    Discord
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-lg font-semibold mb-4">LEGAL</h2>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/privacyPolicy"
                    className={({ isActive }) =>
                      `text-orange-400 hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-orange-300 font-bold' : ''
                      }`
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/termsAndConditions"
                    className={({ isActive }) =>
                      `text-orange-400 hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-orange-300 font-bold' : ''
                      }`
                    }
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4 mt-8">
          <div className="text-sm">
            <p>© 2024 Muhammad Shakeel. All Rights Reserved.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faSnapchatGhost} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
