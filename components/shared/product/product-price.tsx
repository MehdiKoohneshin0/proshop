import { cn } from "@/lib/utils";

const ProductPrice = ({
  price,
  classNames,
}: {
  price: number;
  classNames?: string;
}) => {
  const stringPrice = price.toFixed(2);
  const [intValue, floatValue] = stringPrice.split(".");

  return (
    <div className={cn("text-xl space-x-0.5", classNames)}>
      <span className="text-xs align-super">$</span>
      <span className="font-bold">{intValue}</span>
      <span className="text-xs align-super">{floatValue}</span>
    </div>
  );
};

export default ProductPrice;
