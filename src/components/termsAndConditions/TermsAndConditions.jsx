import React from 'react';

// Replace with your background image URL
const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?fit=crop&w=1920&h=1080';

function TermsAndConditions() {
  return (
    <div
      className="relative mt-10 min-h-screen flex items-center justify-center bg-gray-900"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-12 rounded-lg shadow-lg w-full max-w-4xl text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Terms and Conditions
        </h1>
        <p className="text-lg mb-6">
          Welcome to our Terms and Conditions. Please read these terms carefully
          before using our services.
        </p>
        <h2 className="text-3xl font-bold mb-6">1. Acceptance of Terms</h2>
        <p className="text-lg mb-6">
          By accessing or using our services, you agree to comply with and be
          bound by these Terms and Conditions.
        </p>
        <h2 className="text-3xl font-bold mb-6">2. Use of Services</h2>
        <p className="text-lg mb-6">
          You are responsible for your use of our services and must ensure that
          your use complies with applicable laws and regulations.
        </p>
        <h2 className="text-3xl font-bold mb-6">3. Intellectual Property</h2>
        <p className="text-lg mb-6">
          All content and materials provided through our services are the
          property of the company and are protected by intellectual property
          laws.
        </p>
        <h2 className="text-3xl font-bold mb-6">4. Limitation of Liability</h2>
        <p className="text-lg mb-6">
          Our liability is limited to the maximum extent permitted by law. We
          are not responsible for any damages or losses arising from your use of
          our services.
        </p>
        <h2 className="text-3xl font-bold mb-6">5. Changes to Terms</h2>
        <p className="text-lg mb-6">
          We may update these Terms and Conditions from time to time. Any
          changes will be posted on this page with an updated effective date.
        </p>
        <h2 className="text-3xl font-bold mb-6">6. Contact Information</h2>
        <p className="text-lg">
          If you have any questions about these Terms and Conditions, please
          contact us at [your contact email].
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
