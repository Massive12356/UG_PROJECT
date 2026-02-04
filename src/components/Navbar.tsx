import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/schLogo.png"

/* ---------- Types ---------- */

interface NavItem {
  to: string;
  label: string;
}

/* ---------- Navigation Config ---------- */

const navItems: NavItem[] = [
  { to: "/academics", label: "Academics" },
  { to: "/departments", label: "Departments" },
  // { to: "/faculty", label: "Faculty" },
  { to: "/research", label: "Research" },
  { to: "/news-events", label: "News & Events" },
  { to: "/about-us", label: "About Us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-[90%] mx-auto z-50 transition-all duration-300
        ${
          scrolled
            ? "fixed top-4 left-20 bg-black/40 backdrop-blur-lg shadow-2xl py-3"
            : "absolute top-10 left-20 bg-black/25 backdrop-blur-md py-6"
        }
        border border-white/10 rounded-xl`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="bg-white p-2 rounded-full text-2xl font-bold">
              <Link to="/">
                <img src={logo} alt="University of Ghana Logo" className="w-60 h-10" />
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <DesktopNavLink key={item.to} to={item.to} label={item.label} />
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                className="text-white"
                aria-label="Open Menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div
            className="relative ml-auto w-72 h-full
            bg-black/40 backdrop-blur-xl
            border-l border-white/10
            p-6 space-y-6"
          >
            <button
              className="text-white text-xl mb-4"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>

            {navItems.map((item) => (
              <MobileNavLink
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

/* ---------- Reusable Components ---------- */

const DesktopNavLink = ({ to, label }: NavItem) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-bold uppercase text-[18px] transition-colors duration-300 ${
        isActive
          ? 'text-yellow-400'
          : 'text-white hover:text-yellow-400'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps extends NavItem {
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block text-lg font-semibold transition-colors duration-300 ${
        isActive
          ? 'text-yellow-400'
          : 'text-white hover:text-yellow-400'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
