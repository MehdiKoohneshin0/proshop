import ProductListing from "@/components/shared/product/product-listing";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_COUNT } from "@/lib/constants";

export default async function Home() {
  const latestProducts = await getLatestProducts(LATEST_PRODUCTS_COUNT);

  return (
    <ProductListing
      productsData={latestProducts}
      title="New Arrivals"
      limit={LATEST_PRODUCTS_COUNT}
    />
  );
}
