'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Wholesale', href: '#wholesale' },
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com/__prince_11__',
      label: '@sucumu'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: 'https://facebook.com/sucumu',
      label: 'Sucumu Foods'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:sudhaculture53@gmail.com',
      label: 'sudhaculture53@gmail.com'
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      href: 'tel:+918539053555',
      label: '+91 8539053555'
    }
  ];

  const locations = [
    'Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Greater Noida', 'Ghaziabad'
  ];

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100/50 pt-24 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16 bg-amber-100 rounded-full p-2 flex items-center justify-center">
                <Image
                  src="/sucumu-logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-amber-700/90 leading-relaxed">
              Bringing nature's goodness to your doorstep with premium quality flaxseed products.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-amber-700 hover:text-amber-900 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target='_blank'
                    className="text-amber-700 hover:text-amber-900 flex items-center gap-3 group"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-6">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-amber-100/50 px-4 py-2 rounded-full text-amber-700 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  {location}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-amber-700">
              <Leaf className="w-5 h-5" />
              <span>© 2024 Sucumu. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;