import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Vendor } from '@/lib/types';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <Link href={`/vendor/${vendor.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-600 uppercase tracking-wider">
          {vendor.category}
        </div>
        {vendor.isFeatured && (
          <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 rounded-full text-xs font-bold text-yellow-900 shadow-sm">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
            {vendor.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <span>Location:</span>
          <span>{vendor.location}</span>
        </div>
        
        {vendor.priceRange && (
          <p className="text-pink-600 font-semibold text-sm mb-6">
            {vendor.priceRange}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">View Details</span>
          <span className="text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
