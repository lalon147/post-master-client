import MenuItems from "./MenuItems";
import Link from "next/link";
import Layout from "./Layout";
import DarkModeSwitch from "./DarkMoodSwitch";

const Navbar = () => {
  return (
    <div className="bg-blue-800 py-5">
      <Layout>
        <div className="flex justify-between items-center py-3 max-w-7xl sm:m-auto px-2 ">
          <div className="flex items-center">
            <Link href="/" className="text-2xl">
              <span className="text-xl font-roboto bg-amber-400 rounded-sm font-extrabold mr-1 py-1 px-2">
                POSTMAN
              </span>
            </Link>
          </div>
          <div className="flex gap-5 text-white items-center">
            <MenuItems title="HOME" address="/"></MenuItems>
            <MenuItems title="ABOUT" address="/about" ></MenuItems>
            <MenuItems title="SERVICES" address="/services" ></MenuItems>
            <MenuItems title="LOGIN" address="/login" ></MenuItems>
            <MenuItems title="SIGN UP" address="/signup" ></MenuItems>
            <DarkModeSwitch />
          </div>
          <div className="flex gap-5 text-white items-center">
            <MenuItems title="Dashboard" address="/dashboard" ></MenuItems>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
