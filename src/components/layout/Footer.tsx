import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-pink-600 mb-6">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-pink-600 text-sm font-black text-white shadow-sm" aria-hidden="true">
                Hw
              </span>
              <span>HappiWeds</span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Sri Lanka&apos;s trusted wedding marketplace. We help you find the right vendors for your big day.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/vendors/Photographers" className="text-gray-600 hover:text-pink-600 transition-colors">Photographers</Link></li>
              <li><Link href="/vendors/Venues" className="text-gray-600 hover:text-pink-600 transition-colors">Venues</Link></li>
              <li><Link href="/vendors/Makeup Artists" className="text-gray-600 hover:text-pink-600 transition-colors">Makeup Artists</Link></li>
              <li><Link href="/vendors/Decorators" className="text-gray-600 hover:text-pink-600 transition-colors">Decorators</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</Link></li>
              <li><Link href="/add-vendor" className="text-gray-600 hover:text-pink-600 transition-colors">List Your Business</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
                fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
                ig
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HappiWeds Sri Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
