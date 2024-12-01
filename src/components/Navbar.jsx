import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <div className="text-4xl bg-none" >
              <IoReorderThree />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link className="z-10">Products</Link>
              <ul className="p-2">
                <li>
                  <Link to="/fertiliser">Fertiliser</Link>
                </li>
                <li>
                  <Link to="/biostimulant">Bio-Stimulant</Link>
                </li>
                <li>
                  <Link to="/biopesticide">Bio-Pesticide</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link>
          <img src={logo} className="w-16" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex font-medium ">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary className="">Products</summary>
              <ul className="p-2 z-30">
                <li>
                  <Link to="/fertiliser">Fertiliser</Link>
                </li>
                <li>
                  <Link to="/biostimulant">Bio-Stimulant</Link>
                </li>
                <li>
                  <Link to="/biopesticide">Bio-Pesticide</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
