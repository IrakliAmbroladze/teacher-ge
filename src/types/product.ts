export interface Product {
  id: string | number;
  title: string;
  images: string[];
  description_ka: string;
  description_en: string;
  price: number;
  category_ka: string;
  category_en: string;
  stripe_product_id: string;
  stripe_price_id: string;
  cost: number;
}

export interface ProductListProps {
  locale?: string;
  query?: string;
  sortBy?: string;
  order?: string;
  minPrice?: number;
  maxPrice?: number;
}
