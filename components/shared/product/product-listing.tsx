import ProductCard from "./product-card";

export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
};

type ProductListingProps = {
  productsData: Product[];
  title?: string;
  limit?: number;
};

const ProductListing = ({
  productsData,
  title,
  limit,
}: ProductListingProps) => {
  const limitedProducts = limit ? productsData.slice(0, limit) : productsData;

  if (limitedProducts.length <= 0) {
    return (
      <p className="text-destructive text-2xl">Could Not Found Any Products</p>
    );
  }
  return (
    <>
      {title && <h2 className="h2-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedProducts.map((product: Product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductListing;
