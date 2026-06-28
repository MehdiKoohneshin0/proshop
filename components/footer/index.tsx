import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="py-4 border-t flex-center">
      <span className="text-gray-600 text-sm">{`${new Date().getFullYear()} ${APP_NAME}. All Rights Reserved.`}</span>
    </footer>
  );
};

export default Footer;
