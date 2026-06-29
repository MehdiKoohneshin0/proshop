import { APP_NAME, SERVER_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./nav-menu";

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
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
