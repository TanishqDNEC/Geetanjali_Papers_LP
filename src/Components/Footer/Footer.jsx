import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  const linkClass =
    'hover:text-green-400 transition duration-300';

  return (
    <footer className="bg-slate-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand & Copy */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Geetanjali Papers</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} @geetanjalipapers Ltd. All rights reserved.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li>
            <HashLink smooth to="/#home">Home</HashLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>About</NavLink>
            </li>
            <li>
            <HashLink smooth to="/#services">Services</HashLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Phone: +91-9918077806</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gangwani.rajesh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-400 hover:underline"
        >
                gangwani.rajesh@gmail.com
              </a>

        </div>

        {/* Instagram */}
        {/* <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">Follow Us:</h3>
          <a
            href="https://instagram.com/geetanjalipapers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            <FaInstagram className="text-xl animate-pulse" />
            Instagram
          </a>
        </div> */}
      </div>
      </footer>
      
      
  );
}
