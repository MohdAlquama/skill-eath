import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Privacy Policy</h1>

        <p className="mb-8 text-sm text-center text-gray-600">Last updated: May 24, 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">1. Introduction</h2>
            <p>
              Skill EEarth Academy is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal information such as name, email, phone number, etc.</li>
              <li>Usage data and analytics (e.g., pages visited, time on site).</li>
              <li>Device and browser information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain our services.</li>
              <li>Send you updates, newsletters, and promotions.</li>
              <li>Improve our website and user experience.</li>
              <li>Ensure security and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal data. Please contact us for any data-related requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@skilleEarth.com" className="text-blue-500 underline">
                support@skilleEarth.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
