import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h4 className="text-2xl font-semibold mb-2">Let's keep in touch!</h4>
            <p className="text-sm text-gray-300">Connect with us on our social platforms or reach out via email.</p>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div>
            <h5 className="uppercase text-sm font-semibold mb-3">Quick Links</h5>
            <ul>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm block mb-2">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm block mb-2">About Us</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white text-sm block mb-2">Shop</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm block mb-2">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase text-sm font-semibold mb-3">Resources</h5>
            <ul>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm block mb-2">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white text-sm block mb-2">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase text-sm font-semibold mb-3">Follow Me</h5>
            <ul>
              <li><a href="https://www.linkedin.com/in/prashant-agrawal-4b530b201/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white text-sm block mb-2">LinkedIn</a></li>
              <li><a href="https://github.com/prashant07ag" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white text-sm block mb-2">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Bookstore. Crafted by 
            <a href="https://www.linkedin.com/in/prashant-agrawal-4b530b201/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline ml-1">Prashant Agrawal</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
