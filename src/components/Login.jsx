import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../auth/AuthContext";
import { Link, Navigate } from "react-router";

const Login = () => {
  const { signIn, setUser, user } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err.message);
        setSuccess(false);
      });
  };
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Header></Header>
      </header>
      <main
        style={{
          minHeight: "calc(100vh - 236px)",
        }}
        className="w-11/12 mx-auto flex flex-col gap-8 justify-center items-center"
      >
        <h1 className="font-semibold text-3xl text-center">Login here</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              {success && (
                 <Navigate to={"/"}/>
              )}
              <p className="text-center mt-4 text-md">
                Already have an account?{" "}
                <Link className="text-blue-500 text-lg" to={"/signUp"}>
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <footer className="bg-base-200 ">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Login;
