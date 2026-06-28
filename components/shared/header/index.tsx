import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import { APP_NAME, SERVER_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./modeToggle";

const Header = () => {
  return (
    <header className="py-1  border-b">
      <div className="flex-between wrapper">
        <Link href={SERVER_URL} className="flex-start gap-5">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} Logo`}
            width={42}
            height={42}
            priority={true}
          />
          <h3 className="hidden lg:block font-bold text-2xl">ProShop</h3>
        </Link>

        <div className="space-x-2">
          <ModeToggle />
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
