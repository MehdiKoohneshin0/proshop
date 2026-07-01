import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

import type { Product } from "./product-listing";

const ProductCard = ({ product }: { product: Product }) => {
  return (
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
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {product.brand}
          </span>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-bold text-sm text-gray-600 dark:text-gray-50">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex-between text-gray-500 dark:text-gray-50">
          <span className="text-xs dark:text-gray-400">
            {product.rating} stars
          </span>
          <ProductPrice price={Number(product.price)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
