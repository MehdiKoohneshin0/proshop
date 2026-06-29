import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

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
          <Card key={product.slug}>
            <CardHeader>
              <Link
                href={`/products/${product.slug}`}
                className="w-full flex justify-center"
              >
                <Image
                  src={product.images[0]}
                  className="h-full"
                  width={300}
                  height={300}
                  alt={product.slug}
                />
              </Link>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 justify-between flex-1">
              <div>
                <span className="text-xs text-gray-500">{product.brand}</span>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-bold text-sm text-gray-600">
                    {product.name}
                  </h3>
                </Link>
              </div>
              <div className="flex-between text-gray-500">
                <span className="text-xs">{product.rating} stars</span>
                <ProductPrice price={product.price} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
