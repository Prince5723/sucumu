'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Benifits', href: '#benifits' },
    { name: 'Products', href: '#products' },
    { name: 'Wholesale', href: '#wholesale' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="#home" className="flex items-center">
              <div className="relative w-24 h-24 bg-amber-100 rounded-full p-2 flex items-center justify-center">
                <Image
                  src="/sucumu-logo.png"
                  alt="Logo"
                  width={78}
                  height={78}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Order Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/919876543210?text=I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 shadow-lg shadow-amber-700/20 hover:scale-[1.02] cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-amber-50 text-amber-700"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed top-24 inset-x-4 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-amber-900 hover:text-amber-700 font-medium px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/919876543210?text=I%20want%20to%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-amber-700/20 mt-4"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Order Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
