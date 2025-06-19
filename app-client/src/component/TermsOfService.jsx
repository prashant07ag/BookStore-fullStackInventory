import React from 'react';

const TermsOfService = () => {
  return (
    <div className='mt-28 min-h-screen'>
      <div className="container mx-auto px-6 lg:px-24 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-blue-700">Service</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please read these Terms of Service carefully before using our bookstore services. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-700 space-y-3">
                <p>By accessing and using our bookstore website and services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>These Terms of Service ("Terms") govern your use of our website located at bookstore.com (the "Service") operated by Bookstore ("us", "we", or "our").</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <div className="text-gray-700 space-y-3">
                <p>Our Service provides an online platform for browsing, purchasing, and selling books. We offer:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Online book catalog and search functionality</li>
                  <li>Secure payment processing</li>
                  <li>Order management and tracking</li>
                  <li>Customer support services</li>
                  <li>User account management</li>
                  <li>Book recommendation features</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="text-gray-700 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Registration</h3>
                  <p>To access certain features of our Service, you must create an account. You agree to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Termination</h3>
                  <p>We reserve the right to terminate or suspend your account at any time for violations of these Terms or for any other reason at our sole discretion.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Orders and Payment</h2>
              <div className="text-gray-700 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Process</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>All orders are subject to acceptance and availability</li>
                    <li>We reserve the right to refuse or cancel any order</li>
                    <li>Prices are subject to change without notice</li>
                    <li>You will receive an order confirmation email upon successful placement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Payment is due at the time of order placement</li>
                    <li>We accept major credit cards and other specified payment methods</li>
                    <li>All prices are in USD unless otherwise specified</li>
                    <li>You are responsible for any applicable taxes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping and Delivery</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Shipping costs and delivery times vary by location and method</li>
                    <li>Risk of loss transfers to you upon delivery</li>
                    <li>We are not responsible for delays caused by shipping carriers</li>
                    <li>International shipping may be subject to customs fees</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Returns and Refunds</h2>
              <div className="text-gray-700 space-y-3">
                <p>We want you to be satisfied with your purchase. Our return and refund policy includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Return Period:</strong> Items may be returned within 30 days of delivery</li>
                  <li><strong>Condition:</strong> Items must be in original condition, unused and undamaged</li>
                  <li><strong>Return Shipping:</strong> Customers are responsible for return shipping costs unless the item was defective</li>
                  <li><strong>Refund Processing:</strong> Refunds will be processed within 5-7 business days</li>
                  <li><strong>Digital Products:</strong> Digital downloads are non-refundable once accessed</li>
                  <li><strong>Special Orders:</strong> Custom or special-ordered items may not be returnable</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <div className="text-gray-700 space-y-3">
                <p>You may not use our Service:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To collect or track the personal information of others</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent the security features of the Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <div className="text-gray-700 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Content</h3>
                  <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Bookstore and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">User Content</h3>
                  <p>Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post to the Service and you grant us a license to use, modify, and display such Content.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Copyright Policy</h3>
                  <p>We respect the intellectual property rights of others. If you believe that any material available on or through the Service infringes upon any copyright you own or control, please immediately notify us using the contact information provided below.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
              <div className="text-gray-700 space-y-3">
                <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                  <li>Does not guarantee the accuracy, completeness, or timeliness of information</li>
                  <li>Makes no warranty that the Service will be uninterrupted, secure, or error-free</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <div className="text-gray-700 space-y-3">
                <p>In no event shall Bookstore, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.</p>
                <p>Our total liability to you for any claim arising out of or relating to these Terms or the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <div className="text-gray-700">
                <p>You agree to defend, indemnify, and hold harmless Bookstore and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <div className="text-gray-700 space-y-3">
                <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                <p>If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <div className="text-gray-700">
                <p>These Terms shall be interpreted and governed by the laws of the State of [State], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <div className="text-gray-700">
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <div className="text-gray-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@bookstore.com</p>
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

export default TermsOfService; 