import React, { useContext } from "react";
import { IoMdAppstore } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../auth/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="flex justify-between items-center backdrop-blur-lg z-10 py-4">
      <div>
        <div className="flex  items-center">
          <IoMdAppstore size={40} />
          <span className="font-bold text-2xl ml-2">My AppStore</span>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-8 text-xl   ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "py-1 text-blue-500 border-b" : ""
          }
        >
          App
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive ? "py-1 text-blue-500 border-b" : ""
          }
        >
          Profile
        </NavLink>
      </div>

      <div>
        {/* this div for login logout button */}
        {user ? (
          <button onClick={handleLogOut} className="btn btn-dash btn-info">
            Log Out
          </button>
        ) : (
          <Link to={"/login"} className="btn btn-dash btn-info">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
