import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import { APP_NAME } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-1  border-b">
      <div className="flex-between wrapper">
        <div className="flex-start gap-5">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} Logo`}
            width={42}
            height={42}
            priority={true}
          />
          <h3 className="hidden lg:block font-bold text-2xl">ProShop</h3>
        </div>

        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link className="flex-start gap-2" href={"/cart"}>
              <ShoppingCart />
              <span>Cart</span>
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link className="flex-start gap-2" href={"/sign-in"}>
              <UserIcon />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
