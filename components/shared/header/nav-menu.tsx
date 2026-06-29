import { Button } from "@/components/ui/button";
import ModeToggle from "./modeToggle";
import Link from "next/link";
import {
  EllipsisVertical,
  MenuIcon,
  ShoppingCart,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavMenu = () => {
  return (
    <>
      <nav className="hidden md:flex gap-3">
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
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex-center p-4" variant="ghost">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-6">
            <SheetTitle className="mb-6">Menu</SheetTitle>
            <ModeToggle label />
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
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default NavMenu;
