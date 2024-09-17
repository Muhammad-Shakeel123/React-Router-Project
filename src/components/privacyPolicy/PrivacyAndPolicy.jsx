import React from 'react';

// Replace with your background image URL
const BACKGROUND_IMAGE_URL =
  'https://img.freepik.com/premium-photo/dusty-main-street-lined-with-wooden-boardwalks-hitching-posts_1327465-59797.jpg?ga=GA1.2.1824573526.1723610953&semt=ais_hybrid';

function PrivacyAndPolicy() {
  return (
    <div
      className="relative min-h-screen mt-8 flex items-center justify-center bg-gray-900"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-12 rounded-lg shadow-lg w-full max-w-4xl text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg mb-6">
          We value your privacy and are committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, and disclose
          your information when you visit our website or use our services.
        </p>
        <h2 className="text-3xl font-bold mb-6">1. Information Collection</h2>
        <p className="text-lg mb-6">
          We collect various types of information, including personal
          information, to provide and improve our services. This may include
          data such as your name, email address, and browsing behavior.
        </p>
        <h2 className="text-3xl font-bold mb-6">
          2. How We Use Your Information
        </h2>
        <p className="text-lg mb-6">
          We use your information to enhance your experience, respond to your
          requests, and improve our services. We may also use your data for
          marketing purposes with your consent.
        </p>
        <h2 className="text-3xl font-bold mb-6">3. Data Security</h2>
        <p className="text-lg mb-6">
          We implement appropriate measures to safeguard your data and ensure
          its security. However, no method of transmission over the internet or
          electronic storage is completely secure.
        </p>
        <h2 className="text-3xl font-bold mb-6">4. Changes to This Policy</h2>
        <p className="text-lg mb-6">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the effective date.
        </p>
        <h2 className="text-3xl font-bold mb-6">5. Contact Us</h2>
        <p className="text-lg">
          If you have any questions about this Privacy Policy, please contact us
          at [your contact email].
        </p>
      </div>
    </div>
  );
}

export default PrivacyAndPolicy;
