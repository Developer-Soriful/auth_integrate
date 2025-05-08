import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../auth/AuthContext";
import { Link, Navigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../auth/firebase";

const Login = () => {
  const { signIn, setUser, handleForgetPassword } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
        setError(err.message);
      });
  };
  // handle forget password
  const handleForget = () => {
    handleForgetPassword(email);
  };
  // google Login
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        user(res.user);
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
        setError(err.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>LogIn || page</title>
      </Helmet>
      <header className="w-11/12 mx-auto">
        <Header></Header>
      </header>
      <main
        style={{
          minHeight: "calc(100vh - 236px)",
        }}
        className="w-11/12 mx-auto flex flex-col gap-8 justify-center items-center mt-10"
      >
        <h1 className="font-semibold text-3xl text-center">Login here</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <div className="mx-auto">
                <p
                  onClick={handleGoogleLogin}
                  className="btn btn-outline btn-primary "
                >
                  Google Login
                </p>
              </div>

              <label className="label">Email</label>
              {/* for email haha etai bastob */}
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="label">Password</label>
              {/* for password haha  */}
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a onClick={handleForget} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              {success && <Navigate to={"/"} />}
              {error && <p className="text-red-500">{error}</p>}
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
