import Link from 'next/link';
import Image from 'next/image';
import { categories, vendors } from '@/data/vendors';
import { Category } from '@/lib/types';
import VendorListingFilters from '@/components/vendors/VendorListingFilters';

type ListingVendor = {
  id: string;
  name: string;
  area: string;
  price: string;
  image: string;
  tag?: 'Most Popular' | 'Top Match' | 'Premium' | 'Featured';
  reviews: number;
  rating: string;
  media: string;
};

const photographerListings: ListingVendor[] = [
  {
    id: 'triple-knots',
    name: 'The Triple Knots',
    area: 'Chennai',
    price: 'LKR 24,000',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop',
    tag: 'Most Popular',
    reviews: 6,
    rating: '5.0',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'grace-photography',
    name: 'Grace Photography',
    area: 'Ambattur, Chennai',
    price: 'LKR 27,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    tag: 'Top Match',
    reviews: 6,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'credible-stories',
    name: 'Credible Wedding Stories',
    area: 'Kodambakkam, Chennai',
    price: 'LKR 60,000',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900&auto=format&fit=crop',
    tag: 'Premium',
    reviews: 4,
    rating: '4.8',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'haana-photography',
    name: 'Haana Photography',
    area: 'Chennai',
    price: 'LKR 31,000',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=900&auto=format&fit=crop',
    tag: 'Featured',
    reviews: 5,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'wow-weddings',
    name: 'WowWeddings Photos',
    area: 'Chennai',
    price: 'LKR 62,000',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop',
    tag: 'Premium',
    reviews: 6,
    rating: '5.0',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'tale-vision',
    name: 'Tale Vision Weddings',
    area: 'Saligramam, Chennai',
    price: 'LKR 27,000',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=900&auto=format&fit=crop',
    tag: 'Premium',
    reviews: 9,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'phoenix-photography',
    name: 'Phoenix Photography',
    area: 'Chennai',
    price: 'LKR 45,000',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=900&auto=format&fit=crop',
    reviews: 8,
    rating: '5.0',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'aju-photography',
    name: 'Aju Photography',
    area: 'Mogappair, Chennai',
    price: 'LKR 86,000',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=900&auto=format&fit=crop',
    tag: 'Premium',
    reviews: 6,
    rating: '5.0',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'chandru-photography',
    name: 'Chandru Photography',
    area: 'Choolaimedu, Chennai',
    price: 'LKR 35,000',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=900&auto=format&fit=crop',
    tag: 'Premium',
    reviews: 10,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'lm-photography',
    name: 'LM Photography',
    area: 'Siriperumbudur, Chennai',
    price: 'LKR 20,000',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=900&auto=format&fit=crop',
    reviews: 16,
    rating: '4.8',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'shalight',
    name: 'Shalight Photography',
    area: 'Chennai',
    price: 'LKR 22,000',
    image: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=900&auto=format&fit=crop',
    reviews: 56,
    rating: '4.9',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'sampath',
    name: 'Sampath Photography',
    area: 'Chennai',
    price: 'LKR 40,000',
    image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=900&auto=format&fit=crop',
    reviews: 10,
    rating: '4.8',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'praveens',
    name: 'Praveens Photography',
    area: 'Perungudi, Chennai',
    price: 'LKR 40,000',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=900&auto=format&fit=crop',
    reviews: 14,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'stills-sridhar',
    name: 'Stills Sridhar Photography',
    area: 'Kodambakkam, Chennai',
    price: 'LKR 10,000',
    image: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=900&auto=format&fit=crop',
    reviews: 31,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'one8',
    name: 'One8 Photography',
    area: 'Chennai',
    price: 'LKR 37,000',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=900&auto=format&fit=crop',
    reviews: 4,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'mystic-luna',
    name: 'Mystic Luna Photography',
    area: 'Chennai',
    price: 'LKR 24,000',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=900&auto=format&fit=crop',
    reviews: 6,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'sj-creative',
    name: 'SJ Creative',
    area: 'Chennai',
    price: 'LKR 27,000',
    image: 'https://images.unsplash.com/photo-1482482097755-0b595893ba63?q=80&w=900&auto=format&fit=crop',
    reviews: 14,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'capture-forever',
    name: 'Capture Forever',
    area: 'Avadi, Chennai',
    price: 'LKR 35,000',
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=900&auto=format&fit=crop',
    reviews: 9,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'sparkview',
    name: 'Sparkview Photography',
    area: 'Kodambakkam, Chennai',
    price: 'LKR 22,000',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop',
    reviews: 9,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'bling-bloat',
    name: 'Bling Bloat Creations',
    area: 'West Mambalam, Chennai',
    price: 'LKR 40,000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900&auto=format&fit=crop',
    reviews: 4,
    rating: '4.5',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'romeo-studio',
    name: 'Romeo Studio',
    area: 'Madipakkam, Chennai',
    price: 'LKR 11,500',
    image: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=900&auto=format&fit=crop',
    reviews: 6,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'qjk',
    name: 'Qjk Photography Films',
    area: 'Guindy, Chennai',
    price: 'LKR 13,000',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=900&auto=format&fit=crop',
    reviews: 8,
    rating: '4.8',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'rim-studio',
    name: 'Rim Studio',
    area: 'Vanagaram, Chennai',
    price: 'LKR 35,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    reviews: 15,
    rating: '4.8',
    media: 'Photo & Video Per Day',
  },
  {
    id: 'arish',
    name: 'Arish Kumar Photography',
    area: 'Choolaimedu, Chennai',
    price: 'LKR 40,000',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=900&auto=format&fit=crop',
    reviews: 9,
    rating: '4.6',
    media: 'Photo & Video Per Day',
  },
];

const categoryCopy: Record<Category, { singular: string; location: string; subtitle: string }> = {
  Photographers: {
    singular: 'Wedding Photographers',
    location: 'Chennai',
    subtitle:
      'Searching for best wedding photographers in Chennai? We have curated trusted teams with pricing, reviews, and contact details.',
  },
  Venues: {
    singular: 'Wedding Venues',
    location: 'Sri Lanka',
    subtitle: 'Compare wedding venues by city, price range, guest capacity, and services.',
  },
  'Makeup Artists': {
    singular: 'Bridal Makeup Artists',
    location: 'Sri Lanka',
    subtitle: 'Find bridal makeup artists for traditional, natural, and glam wedding looks.',
  },
  Decorators: {
    singular: 'Wedding Decorators',
    location: 'Sri Lanka',
    subtitle: 'Explore decorators for poruwa, stage, floral, entrance, and reception styling.',
  },
  Caterers: {
    singular: 'Wedding Caterers',
    location: 'Sri Lanka',
    subtitle: 'Shortlist caterers for buffet, plated, vegetarian, and custom wedding menus.',
  },
};

function getCategory(rawCategory: string): Category {
  const decodedCategory = decodeURIComponent(rawCategory);
  const validCategory = categories.find((category) => category.name === decodedCategory)?.name;
  return (validCategory ?? 'Photographers') as Category;
}

function getListings(category: Category): ListingVendor[] {
  if (category === 'Photographers') {
    return photographerListings;
  }

  return vendors
    .filter((vendor) => vendor.category === category)
    .map((vendor, index) => ({
      id: vendor.id,
      name: vendor.name,
      area: vendor.location,
      price: vendor.priceRange?.replace('LKR ', 'LKR ') ?? 'Price on request',
      image: vendor.image,
      tag: index === 0 ? 'Top Match' : vendor.isFeatured ? 'Premium' : undefined,
      reviews: 4 + index,
      rating: index % 2 === 0 ? '4.8' : '4.6',
      media: category === 'Caterers' ? 'Menu Packages' : 'Wedding Packages',
    }));
}

function VendorListingCard({ vendor }: { vendor: ListingVendor }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.14)]">
      <Link href={`/vendor/${vendor.id}`} className="block">
        <div className="relative h-44 overflow-hidden bg-gray-100">
          <Image
            src={vendor.image}
            alt={vendor.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
          {vendor.tag && (
            <span className="absolute left-3 top-3 rounded-sm bg-emerald-700 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              {vendor.tag}
            </span>
          )}
          <span className="absolute bottom-3 left-3 rounded-sm bg-black/60 px-2 py-1 text-[11px] font-medium text-white">
            10+
          </span>
          <span className="absolute bottom-3 right-3 rounded-sm border border-rose-200 bg-white px-2 py-1 text-[11px] font-semibold text-rose-600">
            Shortlist
          </span>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link href={`/vendor/${vendor.id}`} className="block truncate text-[15px] font-bold text-gray-950 hover:text-rose-600">
              {vendor.name}
            </Link>
            <p className="mt-1 truncate text-xs text-gray-600">{vendor.area}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-sm font-bold text-gray-950">{vendor.price}</p>
            <p className="mt-1 text-[11px] text-gray-500">{vendor.media}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
          <span className="font-bold text-amber-500">&#9733; {vendor.rating}</span>
          <span>{vendor.reviews} reviews</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="h-9 rounded border border-gray-300 text-xs font-semibold text-gray-800 transition hover:border-gray-500">
            Send enquiry
          </button>
          <button className="h-9 rounded border border-rose-500 text-xs font-semibold text-rose-600 transition hover:bg-rose-50">
            View contact
          </button>
        </div>
      </div>
    </article>
  );
}

function VendorGrid({ vendors: listingVendors }: { vendors: ListingVendor[] }) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {listingVendors.map((vendor) => (
        <VendorListingCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}

export default async function VendorListingPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: rawCategory } = await params;
  const category = getCategory(rawCategory);
  const listingVendors = getListings(category);
  const copy = categoryCopy[category];
  const promoted = listingVendors.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="text-rose-600 hover:underline">Home</Link>
            <span>/</span>
            <span>Wedding {category}</span>
            <span>/</span>
            <span>{copy.location}</span>
          </div>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
                Best {copy.singular} in {copy.location} ({listingVendors.length + 879})
              </h1>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-gray-600">{copy.subtitle}</p>
            </div>
          </div>
          <div className="mt-7">
            <VendorListingFilters />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VendorGrid vendors={listingVendors.slice(0, 3)} />
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-50 via-amber-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-fuchsia-950">Book vendors through us for the best price</h2>
            <p className="mt-2 text-sm font-semibold text-gray-800">Choose the right vendors within your budget with expert help.</p>
            <div className="mt-5 max-w-lg rounded-lg border border-rose-200 bg-white/70 p-4 text-sm text-gray-700">
              <p className="py-1">&#10003; Dedicated Relationship Manager to assist you</p>
              <p className="py-1">&#10003; Best negotiated rates on vendors</p>
              <p className="py-1">&#10003; Personalised vendor shortlist based on your needs</p>
            </div>
            <button className="mt-6 rounded bg-rose-600 px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-rose-700">
              Get a call back
            </button>
            <p className="mt-4 text-xs italic text-gray-500">Powered by MarketMyWedding</p>
          </div>
          <div className="justify-self-center">
            <div className="h-72 w-72 overflow-hidden rounded-full bg-rose-100 ring-8 ring-white/70 lg:h-80 lg:w-80">
              <Image
                src="https://images.unsplash.com/photo-1610186594416-2c7c0131e35d?q=80&w=800&auto=format&fit=crop"
                alt="Wedding booking assistant"
                width={320}
                height={320}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VendorGrid vendors={listingVendors.slice(3, 9)} />
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-950">Get FREE quotes from multiple vendors</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_1fr_0.8fr]">
            <input className="h-11 rounded border border-gray-300 px-4 text-sm outline-none focus:border-rose-400" placeholder="Enter mobile number" />
            <select className="h-11 rounded border border-gray-300 px-4 text-sm outline-none focus:border-rose-400">
              <option>Select city</option>
              <option>Chennai</option>
              <option>Colombo</option>
              <option>Kandy</option>
            </select>
            <select className="h-11 rounded border border-gray-300 px-4 text-sm outline-none focus:border-rose-400">
              <option>Select vendor category</option>
              {categories.map((option) => (
                <option key={option.name}>{option.name}</option>
              ))}
            </select>
            <button className="h-11 rounded bg-rose-600 text-sm font-bold text-white transition hover:bg-rose-700">Submit</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VendorGrid vendors={listingVendors.slice(9, 18)} />
        </div>
      </section>

      <section className="bg-rose-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-950">Promoted {copy.singular}</h2>
            <Link href={`/vendors/${category}`} className="text-sm font-semibold text-rose-600 hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promoted.map((vendor) => (
              <Link key={vendor.id} href={`/vendor/${vendor.id}`} className="rounded-lg bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-40 overflow-hidden rounded-md bg-gray-100">
                  <Image src={vendor.image} alt={vendor.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <h3 className="mt-3 truncate text-sm font-bold text-gray-950">{vendor.name}</h3>
                <p className="mt-1 text-xs text-gray-600">{vendor.area}</p>
                <p className="mt-2 text-xs font-semibold text-amber-500">&#9733; {vendor.rating}</p>
                <p className="mt-1 text-sm font-bold text-gray-950">{vendor.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VendorGrid vendors={listingVendors.slice(18)} />
          <div className="mt-12 text-center">
            <button className="rounded bg-rose-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-rose-700">
              Show more vendors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
