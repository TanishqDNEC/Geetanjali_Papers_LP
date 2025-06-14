import { NavLink } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";


export default function Header() {
  const linkClass =
    'text-white hover:text-green-400 transition duration-300 px-3 py-2';
  const activeClass = 'border-b-2 border-green-400';

  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Geetanjali Papers</div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
            <Link smooth to="/#services">Services</Link>

            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
