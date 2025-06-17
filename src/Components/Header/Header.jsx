import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    'block text-white hover:text-green-400 transition duration-300 px-4 py-2 text-sm';
  const activeClass = 'border-l-4 sm:border-b-2 border-green-400';

  return (
    <header className="bg-slate-900 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Title */}
        <div className="text-2xl font-bold">Geetanjali Papers</div>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden block focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            About
          </NavLink>
          <Link smooth to="/#services" className={linkClass}>
            Services
          </Link>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-48 bg-slate-900 rounded-lg shadow-lg sm:hidden">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              About
            </NavLink>
            <Link
              smooth
              to="/#services"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              Services
            </Link>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
