import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/vendors';

const cities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Kurunegala'];
const serviceOptions = [
  'Wedding day coverage',
  'Pre-wedding shoot',
  'Bridal dressing',
  'Poruwa decor',
  'Catering packages',
  'Album design',
  'Drone coverage',
  'Event coordination',
];

function Field({
  label,
  children,
  hint,
}: Readonly<{
  label: string;
  children: React.ReactNode;
  hint?: string;
}>) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-gray-900">{label}</span>
      <div className="mt-2">{children}</div>
      {hint && <span className="mt-2 block text-xs font-medium text-gray-500">{hint}</span>}
    </label>
  );
}

function inputClass() {
  return 'h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-100';
}

function Panel({
  title,
  eyebrow,
  children,
}: Readonly<{
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      {eyebrow && <p className="mb-2 text-xs font-black uppercase tracking-wide text-rose-500">{eyebrow}</p>}
      <h2 className="text-xl font-black text-gray-950">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
      <span className="text-rose-500">&#10003;</span>
      {children}
    </span>
  );
}

export default function AddVendorPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 text-gray-950">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-gray-500">
              <Link href="/" className="text-rose-500 hover:underline">Home</Link>
              <span>/</span>
              <span>List Your Business</span>
            </nav>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-500">Vendor onboarding</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-gray-950 md:text-5xl">
              Get listed where Sri Lankan couples compare wedding vendors.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Create a profile with services, package pricing, photos, and contact details. Our team reviews every listing before it goes live.
            </p>
            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ['10k+', 'monthly couples'],
                ['24h', 'profile review'],
                ['5', 'vendor categories'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-rose-100 bg-rose-50 px-4 py-3">
                  <p className="text-2xl font-black text-rose-600">{value}</p>
                  <p className="mt-1 text-xs font-bold text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-gray-100 shadow-[0_10px_34px_rgba(15,23,42,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
              alt="Wedding vendor setup"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/95 p-4 shadow-lg">
              <p className="text-sm font-black text-gray-950">Profile readiness</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-3/4 rounded-full bg-rose-500" />
              </div>
              <p className="mt-3 text-xs font-semibold text-gray-600">Business info, service packages, photos, and contact verification.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <main className="space-y-6">
          <Panel eyebrow="Step 1" title="Business profile">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Business name">
                <input className={inputClass()} placeholder="e.g. Dream Wedding Decor" />
              </Field>
              <Field label="Vendor category">
                <select className={`${inputClass()} appearance-none`}>
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Primary city">
                <select className={`${inputClass()} appearance-none`}>
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </Field>
              <Field label="Service areas">
                <input className={inputClass()} placeholder="Colombo, Gampaha, Kalutara" />
              </Field>
              <Field label="Owner name">
                <input className={inputClass()} placeholder="Your full name" />
              </Field>
              <Field label="Phone / WhatsApp" hint="Use a Sri Lankan mobile number, for example +94771234567.">
                <input className={inputClass()} placeholder="+94 77 123 4567" />
              </Field>
            </div>
          </Panel>

          <Panel eyebrow="Step 2" title="Packages and services">
            <div className="grid gap-5 md:grid-cols-[1fr_0.65fr]">
              <Field label="Starting price">
                <input className={inputClass()} placeholder="LKR 75,000" />
              </Field>
              <Field label="Price unit">
                <select className={`${inputClass()} appearance-none`}>
                  <option>Per day</option>
                  <option>Per event</option>
                  <option>Per plate</option>
                  <option>Package</option>
                </select>
              </Field>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold text-gray-900">Services offered</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm font-semibold text-gray-800">
                    <input type="checkbox" className="h-4 w-4 accent-rose-500" />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field label="Basic package includes">
                <textarea className="min-h-28 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-100" placeholder="List the core services included in your entry package." />
              </Field>
              <Field label="Business description">
                <textarea className="min-h-28 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-100" placeholder="Describe your style, experience, and what makes your service reliable." />
              </Field>
            </div>
          </Panel>

          <Panel eyebrow="Step 3" title="Photos and proof">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
              <div className="rounded-lg border-2 border-dashed border-rose-200 bg-rose-50/40 p-8 text-center transition hover:border-rose-400">
                <p className="text-sm font-black uppercase tracking-wide text-rose-500">Upload gallery</p>
                <p className="mt-3 text-lg font-black text-gray-950">Add 5 to 10 wedding photos</p>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-600">Use clear, recent work samples. The first image appears as your listing cover.</p>
                <button className="mt-5 rounded bg-rose-500 px-5 py-3 text-sm font-black text-white transition hover:bg-rose-600">Choose photos</button>
              </div>
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4">
                <Field label="Instagram or portfolio link">
                  <input className={inputClass()} placeholder="https://instagram.com/yourbusiness" />
                </Field>
                <Field label="Years in business">
                  <input className={inputClass()} placeholder="5" />
                </Field>
              </div>
            </div>
          </Panel>

          <Panel eyebrow="Step 4" title="Submit for review">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm leading-6 text-gray-600">
                  By submitting this form, you confirm that the business details, images, prices, and contact information are accurate.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  <CheckItem>Manual profile review</CheckItem>
                  <CheckItem>OTP contact verification</CheckItem>
                  <CheckItem>No listing fee today</CheckItem>
                </div>
              </div>
              <button className="h-12 rounded bg-rose-500 px-8 text-sm font-black text-white shadow-sm transition hover:bg-rose-600">
                Submit Listing
              </button>
            </div>
          </Panel>
        </main>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-gray-950">What happens next?</h2>
            <div className="mt-5 space-y-5">
              {[
                ['1', 'We verify your contact number and business category.'],
                ['2', 'Your photos, services, and prices are checked for clarity.'],
                ['3', 'Approved profiles appear in vendor search and detail pages.'],
              ].map(([number, text]) => (
                <div key={number} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rose-100 text-xs font-black text-rose-600">{number}</span>
                  <p className="text-sm font-semibold leading-6 text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
            <h2 className="text-lg font-black text-gray-950">Profile tips</h2>
            <div className="mt-4 space-y-3">
              <CheckItem>Use real package prices</CheckItem>
              <CheckItem>Add location-specific service areas</CheckItem>
              <CheckItem>Upload bright, uncropped cover photos</CheckItem>
              <CheckItem>Keep WhatsApp active for enquiries</CheckItem>
            </div>
          </section>

          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-black text-emerald-800">Need help?</p>
            <p className="mt-2 text-sm leading-6 text-gray-700">Our onboarding team can help convert your service list into packages couples can compare quickly.</p>
            <button className="mt-4 rounded border border-emerald-500 px-4 py-2 text-sm font-black text-emerald-700 transition hover:bg-emerald-100">Request callback</button>
          </section>
        </aside>
      </div>
    </div>
  );
}
