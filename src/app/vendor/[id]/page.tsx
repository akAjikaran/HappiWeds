import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vendors } from '@/data/vendors';
import { Vendor } from '@/lib/types';
import ContactOtpModal from '@/components/vendors/ContactOtpModal';

type DetailRow = {
  label: string;
  price: string;
};

function primaryPrice(priceRange?: string) {
  if (!priceRange) {
    return 'Price on request';
  }

  return priceRange.split('-')[0].trim();
}

function serviceRows(vendor: Vendor): DetailRow[] {
  const defaults = [
    'Pre Wedding Photoshoot',
    'Traditional Photography',
    'Albums',
    'Cinematography',
    'Pre Wedding Video',
    'Candid Photography',
    'Traditional Video',
  ];

  const labels = Array.from(new Set(['Basic Package', ...vendor.services, ...defaults])).slice(0, 8);
  const prices = ['70,000', '30,000', '7,000', '12,000', '15,000', '40,000', '14,000', '10,000'];

  return labels.map((label, index) => ({
    label,
    price: `LKR ${prices[index] ?? '20,000'}`,
  }));
}

function recommendationVendors(vendor: Vendor) {
  const related = vendors.filter((item) => item.id !== vendor.id && item.category === vendor.category);
  const fallback = vendors.filter((item) => item.id !== vendor.id);
  return (related.length ? related : fallback).slice(0, 5);
}

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function fallbackVendorFromListingId(id: string): Vendor {
  const name = titleFromSlug(id);

  return {
    id,
    name: name.includes('Photography') || name.includes('Studio') ? name : `${name} Photography`,
    category: 'Photographers',
    location: 'Colombo',
    priceRange: 'LKR 29,000 - 75,000',
    description:
      'A wedding photography team offering reliable event coverage, pre-wedding sessions, albums, and cinematic storytelling for couples across Sri Lanka.',
    services: ['Photo & Video coverage', 'Pre-wedding shoot', 'Candid photography', 'Album design', 'Traditional video', 'Drone coverage'],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop',
    ],
    phone: '+94771234567',
    whatsapp: '+94771234567',
    isFeatured: true,
  };
}

function Panel({
  children,
  className = '',
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={`rounded-lg border border-gray-200 bg-white ${className}`}>
      {children}
    </section>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-semibold text-gray-900">
      <span className="text-rose-500">&#10003;</span>
      {children}
    </span>
  );
}

function RatingBox() {
  return (
    <div className="mt-4 flex w-fit overflow-hidden rounded-lg border border-amber-200 bg-amber-50">
      <div className="border-r border-amber-200 px-6 py-3 text-center">
        <p className="text-lg font-bold text-gray-900">4.8</p>
        <p className="text-xs font-semibold text-gray-700">Ratings</p>
      </div>
      <div className="px-7 py-3">
        <p className="text-center text-sm font-bold text-gray-900">Good</p>
        <p className="mt-1 text-lg tracking-wide text-amber-400">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
      </div>
    </div>
  );
}

function RecommendationCard({ vendor, index }: { vendor: Vendor; index: number }) {
  return (
    <Link href={`/vendor/${vendor.id}`} className="grid grid-cols-[92px_1fr] gap-3 rounded-xl bg-white p-2 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(15,23,42,0.12)]">
      <div className="relative h-24 overflow-hidden rounded-lg bg-gray-100">
        <Image src={vendor.image} alt={vendor.name} fill sizes="92px" className="object-cover" />
      </div>
      <div className="min-w-0 py-1">
        <p className="text-[11px] font-semibold text-amber-500">&#9733; {(5 - index * 0.1).toFixed(1)} <span className="text-gray-400">{7 + index * 3} Reviews</span></p>
        <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-4 text-gray-950">{vendor.name}</h3>
        <p className="mt-1 text-[11px] text-gray-600">{vendor.location}</p>
        <p className="mt-1 text-sm font-bold text-gray-950">{primaryPrice(vendor.priceRange)}</p>
      </div>
    </Link>
  );
}

export default async function VendorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vendor = vendors.find((item) => item.id === id) ?? fallbackVendorFromListingId(id);

  if (!vendor.name.trim()) {
    notFound();
  }

  const rows = serviceRows(vendor);
  const recommendations = recommendationVendors(vendor);
  const gallery = [vendor.image, ...vendor.gallery].slice(0, 3);
  const albumImages = gallery.length >= 2 ? gallery.slice(0, 2) : [vendor.image, vendor.image];

  return (
    <div className="min-h-screen bg-white pb-16 text-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
          <Link href="/" className="text-rose-500 underline-offset-2 hover:underline">Home</Link>
          <span>/</span>
          <Link href={`/vendors/${vendor.category}`} className="text-rose-500 underline-offset-2 hover:underline">Wedding {vendor.category}</Link>
          <span>/</span>
          <span>{vendor.location}</span>
          <span>/</span>
          <span>{vendor.name}</span>
        </nav>

        <section className="grid gap-6 rounded-2xl bg-white p-3 shadow-[0_10px_34px_rgba(15,23,42,0.10)] lg:grid-cols-[1.12fr_1fr] lg:p-4">
          <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-gray-100 lg:min-h-[365px]">
            <Image src={vendor.image} alt={vendor.name} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            <button className="absolute left-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-lg font-bold text-white">&lsaquo;</button>
            <button className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-lg font-bold text-white">&rsaquo;</button>
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
              {[0, 1, 2, 3].map((dot) => (
                <span key={dot} className={`h-1.5 rounded-full ${dot === 0 ? 'w-5 bg-rose-500' : 'w-1.5 bg-white/80'}`} />
              ))}
            </div>
            <span className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-1 text-[11px] font-bold text-white">1/10</span>
          </div>

          <div className="relative flex flex-col justify-center px-2 py-6 sm:px-4 lg:px-2">
            <div className="absolute right-2 top-3 flex items-center gap-4 text-xs font-semibold text-gray-700">
              <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-rose-500 shadow-sm">Shortlist</button>
              <button className="text-xl leading-none text-gray-700">...</button>
            </div>

            <div className="max-w-lg">
              <h1 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{vendor.name}</h1>
              <p className="mt-1 text-sm font-medium text-gray-700">{vendor.location}</p>
              <span className="mt-3 inline-block rounded bg-fuchsia-50 px-2 py-1 text-xs font-bold text-fuchsia-700">Delivers within 4 weeks</span>
              <RatingBox />
              <div className="mt-5 flex items-end gap-2">
                <p className="text-3xl font-black text-gray-950">{primaryPrice(vendor.priceRange)}</p>
                <p className="pb-1 text-xs font-bold text-gray-700">{vendor.category === 'Caterers' ? 'per plate' : 'Photo & Video Per Day'}</p>
              </div>
              <ContactOtpModal vendorName={vendor.name} vendorPhone={vendor.phone} />
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <main className="space-y-6">
            <Panel className="flex items-center justify-between px-4 py-4">
              <div>
                <h2 className="text-lg font-bold">Basic package</h2>
                <button className="mt-1 text-xs font-bold text-rose-500">See what you get v</button>
              </div>
              <div className="text-right">
                <p className="text-lg font-black">LKR 70,000</p>
                <p className="text-xs font-medium text-gray-600">per day</p>
              </div>
            </Panel>

            <Panel className="p-5">
              <h2 className="text-lg font-bold">Services offered</h2>
              <div className="mt-7 divide-y divide-gray-200">
                {rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <p className="font-bold text-gray-950">{row.label}</p>
                    <p className="shrink-0 font-bold text-gray-950">{row.price}</p>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel className="border-violet-300 bg-violet-50/30 p-4">
              <h2 className="text-center text-lg font-bold">Why to choose us?</h2>
              <div className="mt-4 grid rounded-full border border-violet-100 bg-white px-6 py-4 text-sm font-bold text-gray-900 sm:grid-cols-2">
                <div className="flex items-center justify-center gap-3 border-gray-200 sm:border-r">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-100 text-amber-700">5y</span>
                  <span>5 years in business</span>
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 sm:mt-0">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-fuchsia-100 text-fuchsia-700">150</span>
                  <span>150 Events done</span>
                </div>
              </div>
            </Panel>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black">Albums (2)</h2>
                <button className="text-sm font-bold text-rose-500">View all &gt;</button>
              </div>
              <div className="grid max-w-md grid-cols-2 gap-3">
                {albumImages.map((image, index) => (
                  <div key={`${image}-${index}`} className="relative h-40 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={image} alt={`${vendor.name} album ${index + 1}`} fill sizes="190px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-base font-bold text-white">{index === 0 ? 'Wedding' : 'Prewedding'}</p>
                  </div>
                ))}
              </div>
            </section>

            <Panel className="p-5">
              <h2 className="text-xl font-black">Other Services</h2>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
                {['Pre-Wedding Shoot', 'Candid Photography', 'Traditional Photography', 'Cinematic Videography', 'Traditional Video', 'Drones', 'Albums'].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>
            </Panel>

            <Panel className="p-5">
              <h2 className="text-xl font-black">Payment Policies</h2>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
                {['50% Payment On Date', '20% Payment After Event', 'Cancellation Policy - Non Refundable', '30% Payment On Booking'].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>
            </Panel>

            <Panel className="p-5">
              <h2 className="text-xl font-black">Other Information</h2>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
                <CheckItem>Delivery Time - 4 Weeks</CheckItem>
                <CheckItem>Willing To Travel To Other Cities - Yes</CheckItem>
              </div>
            </Panel>

            <Panel className="border-emerald-200 bg-emerald-50 p-5">
              <h2 className="border-b border-emerald-200 pb-3 text-sm font-black">Key Insights</h2>
              <div className="pt-4">
                <p className="font-bold text-gray-950">What users liked?</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  <CheckItem>Best in budget</CheckItem>
                  <CheckItem>Very Professional</CheckItem>
                  <CheckItem>Good service &amp; Time management</CheckItem>
                </div>
              </div>
            </Panel>

            <Panel className="p-5">
              <h2 className="text-xl font-black">About {vendor.name}</h2>
              <p className="mt-5 text-sm leading-7 text-gray-700">
                {vendor.description} We work closely with couples from the first conversation through the wedding day,
                planning details carefully and delivering a polished experience for every event.
              </p>
              <button className="mt-3 text-sm font-bold text-rose-500">Show More</button>
            </Panel>
          </main>

          <aside className="h-fit rounded-lg border border-gray-200 bg-white p-4 lg:sticky lg:top-28">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold">You may also like</h2>
              <Link href={`/vendors/${vendor.category}`} className="text-sm font-bold text-rose-500">View all &gt;</Link>
            </div>
            <div className="space-y-4">
              {recommendations.map((item, index) => (
                <RecommendationCard key={item.id} vendor={item} index={index} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
