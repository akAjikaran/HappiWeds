export interface Vendor {
  id: string;
  name: string;
  category: 'Photographers' | 'Venues' | 'Makeup Artists' | 'Decorators' | 'Caterers';
  location: string;
  priceRange?: string;
  description: string;
  services: string[];
  image: string;
  gallery: string[];
  phone: string;
  whatsapp: string;
  isFeatured?: boolean;
}

export type Category = Vendor['category'];
