import logo from "../assets/logo.svg";
import { navItems } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [windowOpen, setWindowOpen] = useState(false);
  const handleClick = () => {
    setWindowOpen(!windowOpen);
  };
  return (
    <div className="backdrop-blur-md sticky top-0 z-50  py-3 border-b border-neutral-700/65   ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between ">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img src={logo} alt="NavLogo" className="h-10 w-10 mr-2" />
            </Link>
            <Link to="/">
              {" "}
              <span className="text-xl tracking-tight">GeekFood</span>
            </Link>
          </div>
          <div>
            <ul className="hidden  lg:flex ml-14 space-x-12 ">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    `py-4 ${
                      isActive ? "text-red-500" : "hover:text-gray-500"
                    } cursor-pointer`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            <Link
              to="/"
              href="#"
              className=" px-3 py-2 rounded-md bg-blue-500  hover:bg-blue-700 "
            >
              Get started
            </Link>
          </div>
          <div className=" lg:hidden md:flex flex-col flex-end  ">
            <button onClick={handleClick}>
              {" "}
              {windowOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {windowOpen && (
          <ul className=" top-[4rem] w-full  bg-neutral-800 shadow-md fixed right-0 shadow-neutral-800 py-10 z-50  flex flex-col justify-center items-center lg:hidden">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className={({ isActive }) =>
                  `py-4 ${
                    isActive ? "text-red-500" : "hover:text-gray-500"
                  } cursor-pointer`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/"
              className="py-2 px-3 bg-blue-500 hover:bg-blue-700 rounded-md"
            >
              Get Strarted
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
