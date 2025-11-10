export type product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: string[];
  price: number;
  heroImage: string;
  category: number;
  maxQuantity: number;
};

export type CategoryWithProducts = {
  created_at: string;
  id: number;
  imageUrl: string;
  name: string;
  products: product[];
  slug: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];
