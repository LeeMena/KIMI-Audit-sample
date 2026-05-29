import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Insights', path: '/insights' },
  { label: 'Book', path: '/book' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-luxury-black/95 backdrop-blur-md border-b border-luxury-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="font-display text-xl md:text-2xl text-luxury-text tracking-[0.1em] leading-none">
                Leander Mena
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-gold-muted mt-1">
                Hospitality & F&B Operations
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-gold'
                      : 'text-luxury-muted hover:text-luxury-text'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                to="/products"
                className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-luxury-muted hover:text-gold transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
              </Link>
              <Link to="/book" className="hidden md:inline-flex btn-primary text-[10px] py-3 px-6">
                Book a Call
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-luxury-text p-2"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-black/98 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-serif tracking-[0.05em] transition-colors ${
                      isActive(link.path) ? 'text-gold' : 'text-luxury-text hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link to="/book" className="btn-primary">
                  Book a Discovery Call
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
