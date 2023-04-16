import Link from "next/link";
import Layout from "./Layout";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <div className="dark:bg-[#0b1120] bg-success py-5 fixed top-0 w-full z-50">
      <Layout>
        <div className="flex justify-between items-center py-3 max-w-7xl sm:m-auto px-2 ">
          <div className="flex items-center">
            <Link href="/" className="text-2xl">
              <span className="text-xl font-roboto bg-amber-400 rounded-sm font-extrabold mr-1 py-1 px-2">
                POSTMASTER
              </span>
            </Link>
          </div>
          <div>
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <MenuItems address="/" title="HOME"></MenuItems>
                </li>
                <li>
                  <MenuItems address="/about" title="ABOUT"></MenuItems>
                </li>
                <li>
                  <MenuItems address="/services" title="SERVICES"></MenuItems>
                </li>
              </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <MenuItems address="/" title="HOME"></MenuItems>
                </li>
                <li>
                  <MenuItems address="/about" title="ABOUT"></MenuItems>
                </li>
                <li>
                  <MenuItems address="/services" title="SERVICES"></MenuItems>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5 text-white items-center">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-success dark:bg-slate-500 rounded-box w-52"
              >
                <li>
                  <MenuItems title="Dashboard" address="/dashboard"></MenuItems>
                </li>
                <li>
                  <MenuItems title="Login" address="/login"></MenuItems>
                </li>
                <li>
                  <MenuItems title="Sign Up" address="/signup"></MenuItems>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
