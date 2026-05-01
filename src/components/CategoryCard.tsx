import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  name: string;
  icon: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, image }) => {
  return (
    <Link 
      href={`/vendors/${name}`} 
      className="relative group block h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="mb-2 w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-pink-700">{icon}</span>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
