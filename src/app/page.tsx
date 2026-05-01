import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CategoryCard from '@/components/CategoryCard';
import VendorCard from '@/components/vendors/VendorCard';
import { categories, vendors } from '@/data/vendors';

export default function Home() {
  const featuredVendors = vendors.filter(v => v.isFeatured);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Wedding background"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pink-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Find Wedding Vendors in Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-pink-50 mb-10 drop-shadow-md">
            Everything you need for your perfect day, all in one place.
          </p>

          <div className="bg-white p-4 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-4 items-center max-w-3xl mx-auto">
            <div className="w-full md:flex-1 relative">
              <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 appearance-none text-gray-700">
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                v
              </div>
            </div>
            <div className="w-full md:flex-1 relative">
              <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 appearance-none text-gray-700">
                <option value="">Select Location</option>
                <option value="Colombo">Colombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Galle">Galle</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                v
              </div>
            </div>
            <Button className="w-full md:w-auto h-14 px-10">Search</Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find the best professionals for your wedding</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              image={category.image}
            />
          ))}
        </div>
      </section>

      {/* Featured Vendors Section */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Vendors</h2>
              <p className="text-gray-600">Handpicked premium vendors for you</p>
            </div>
            <Link href="/vendors/Photographers" className="text-pink-600 font-bold hover:underline">
              View All Vendors &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-pink-600 rounded-[3rem] p-10 md:p-20 text-center text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Are you a Wedding Vendor?</h2>
            <p className="text-xl text-pink-100 mb-10">
              Grow your business by showcasing your services to thousands of couples across Sri Lanka.
            </p>
            <Link href="/add-vendor">
              <Button variant="secondary" size="lg" className="bg-white text-pink-600 hover:bg-pink-50 border-none">
                List Your Business Today
              </Button>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-pink-500 rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-pink-700 rounded-full opacity-50 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
