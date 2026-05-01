'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const cities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo'];

export default function VendorCitySelector() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Select city');

  if (!pathname.startsWith('/vendors/')) {
    return null;
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-pink-300 hover:text-pink-600"
      >
        {selectedCity}
        <span className="text-xs text-gray-400">v</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                setSelectedCity(city);
                setIsOpen(false);
              }}
              className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition ${
                selectedCity === city ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
