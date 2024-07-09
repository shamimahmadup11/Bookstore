import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";
import Logout from "./Logout";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState();
  const nevigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const hndlelogin = async () => {
    setLogin(!login);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = async () => {
    // e.preventDefault();
    let errors = [];
    if (!formData.email) {
      errors.push({ name: "email", message: "Email is required" });
    }
    if (!formData.password) {
      errors.push({ name: "password", message: "Password is required" });
    }
    setErrors(errors);
    // if (errors.length === 0) {
    const userInfo = {
      email: formData.email,
      password: formData.password,
    };
    console.log(userInfo);
    try {
      const response = await axios.post(
        "http://localhost:4002/user/login",
        userInfo
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Login Successfull!");
        localStorage.setItem("user", JSON.stringify(response.data.user));
    
      }
    } catch (error) {
      console.log(error);
      toast.success("Something went wrong");
    }
  };

  const navItems = (
    <>
      <Link to="/">
        <li className="text-black">
          <a>Home</a>
        </li>
      </Link>
      <Link to="/course">
        <li className="text-black">
          <a>Courses</a>
        </li>
      </Link>
      <Link to="/contact">
        <li className="text-black">
          <a>Contact</a>
        </li>
      </Link>

      <li className="text-black">
        <a>About</a>
      </li>
    </>
  );
  return (
    <div
      className={`bg-gray-100 max-w-screen-2xl container max-auto md:px-20 px-4 ${
        scroll
          ? "sticky top-0 bg-gray-300 shadow-lg duration-300 transition-all ease-out z-10"
          : "bg-gray-100"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <li className="btn btn-ghost text-xl font-bold text-black">
              <a>Bookstore</a>
            </li>
          </Link>
          <div>
            <Toaster />
          </div>
        </div>
        <div className=" navbar-end gap-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className=" hidden md:block">
            <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
              <input
                type="text"
                className="grow outline-none  bg-gray-100   "
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-5 w-5fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className=" bg-black text-white p-2 rounded hover:bg-slate-800  duration-300 cursor-pointer "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal() &&
                  hndlelogin()
                }
              > Login</a>
            </div>
          )}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_1" className="modal ">
            <div className="modal-box bg-gray-100 flex flex-col gap-7">
              <h3 className="font-bold text-lg text-pink-500">Login!</h3>
              <div>
                <h1 className=" text-black ml-2 ">
                  {" "}
                  Email <span className="text-black">*</span> :
                </h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="Email"
                    className="grow outline-none   bg-gray-100  text-black   "
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </label>
                <p className="text-red-600 ">
                  {errors?.find((err) => err.name === "email")?.message}
                </p>
              </div>
              <div>
                <h1 className=" text-black ml-2 ">
                  {" "}
                  Password <span className="text-black">*</span> :
                </h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="Password"
                    className="grow outline-none bg-gray-100 text-black   "
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </label>
                <p className="text-red-600 ">
                  {errors?.find((err) => err.name === "password")?.message}
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <button
                  className=" bg-pink-500 rounded px-2 py-2  cursor-pointer text-white"
                  onClick={() => handleSubmit(formData)}
                >
                  Login
                </button>
                <div>
                  <span className="text-black">Not Registor ?</span>
                  <Link to="/signup" className=" text-blue-700">
                    Signup
                  </Link>
                </div>
              </div>

              <div className="modal-action">
                <form method="dialog ">
                  {/* if there is a button in form, it will close the modal */}
                  <div className=" flex justify-around ">
                  <button
              className="btn text-white"
              onClick={() => {
                nevigate('/') // Navigate to home page
              }}
            >
              Close
            </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
