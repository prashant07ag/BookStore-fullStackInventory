import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='mt-28 min-h-screen'>
      <div className="container mx-auto px-6 lg:px-24 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-blue-700">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our bookstore services.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Account credentials (username and password)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Purchase history and preferences</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p>We automatically collect certain information when you use our services:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, clicks)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Location information (if permitted by your device)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-700">
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send you important updates about your orders and account</li>
                  <li>Personalize your shopping experience and recommend books</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <div className="text-gray-700 space-y-4">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p>We may share your information with trusted third-party service providers who assist us in:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Payment processing</li>
                    <li>Shipping and delivery</li>
                    <li>Email marketing services</li>
                    <li>Website analytics</li>
                    <li>Customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p>We may disclose your information when required by law or to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Comply with legal processes or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Investigate or prevent illegal activities</li>
                    <li>Enforce our terms of service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <div className="text-gray-700 space-y-3">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and employee training</li>
                  <li>PCI DSS compliance for payment processing</li>
                </ul>
                <p className="mt-3">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <div className="text-gray-700 space-y-3">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Cookie Control:</strong> Manage cookie preferences through your browser settings</li>
                </ul>
                <p className="mt-3">To exercise these rights, please contact us using the information provided in the Contact section.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <div className="text-gray-700 space-y-3">
                <p>We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Enable social media features</li>
                  <li>Serve targeted advertisements</li>
                </ul>
                <p className="mt-3">You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <div className="text-gray-700">
                <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <div className="text-gray-700">
                <p>Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <div className="text-gray-700">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <div className="text-gray-700">
                <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@bookstore.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Book Street, Reading City, RC 12345, United States</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 