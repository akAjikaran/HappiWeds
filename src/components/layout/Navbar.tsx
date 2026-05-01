import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { categories } from '@/data/vendors';
import VendorCitySelector from './VendorCitySelector';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-pink-600">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-pink-600 text-sm font-black text-white shadow-sm" aria-hidden="true">
              Hw
            </span>
            <span>HappiWeds</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-2 text-gray-700 font-semibold transition-colors hover:text-pink-600">
                Vendors
                <span className="text-xs text-gray-400">v</span>
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-3 w-64 translate-y-1 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/vendors/${category.name}`}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <VendorCitySelector />
            <Link href="/" className="text-gray-700 hover:text-pink-600 font-semibold transition-colors">Login</Link>
            <Link href="/add-vendor">
              <Button size="sm">Join as a Vendor</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
