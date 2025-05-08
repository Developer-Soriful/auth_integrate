import React, { useContext } from "react";
import { IoMdAppstore } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { CiSquareInfo } from "react-icons/ci";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };

  return (
    <div>
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
            <FaAppStoreIos size={30} />
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              `${isActive ? "py-1 text-blue-500 border-b" : ""} relative group`
            }
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="user"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <FaUserCircle size={30} />
            )}

            <span className="absolute top-9 -right-6 text-center bg-red-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-xs hidden group-hover:flex justify-center items-center px-2 py-1 rounded">
              {user?.displayName ? user.displayName : "No userName"}
            </span>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "py-1 text-blue-500 border-b" : ""
            }
          >
            <CiSquareInfo size={30} />
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
      <div className=" lg:hidden flex justify-center items-center gap-8 text-xl   ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "py-1 text-blue-500 border-b" : ""
          }
        >
          <FaAppStoreIos size={30} />
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `${isActive ? "py-1 text-blue-500 border-b" : ""} relative group`
          }
        >
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle size={30} />
          )}

          <span className="absolute  top-9 -right-6 text-center bg-red-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-xs hidden group-hover:flex justify-center items-center px-2 py-1 rounded">
            {user?.displayName ? user.displayName : "No userName"}
          </span>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "py-1 text-blue-500 border-b" : ""
          }
        >
          <CiSquareInfo size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
