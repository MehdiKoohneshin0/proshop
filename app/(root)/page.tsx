import ProductListing from "@/components/shared/product/product-listing";
import sampleData from "@/db/sample-data";

export default async function Home() {
  return (
    <ProductListing
      productsData={sampleData.products}
      title="New Arrivals"
      limit={4}
    />
  );
}
