import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, setUser, user } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  // this function for handle show password
  const handleShowBtn = () => {
    setShow(!show);
  };
  // this function for handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const isStrong = (password) =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(password);
    if (!isStrong(password)) {
      setError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    createUser(name, photoUrl, email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess("Sign Up Successful");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setSuccess(null);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up || page</title>
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
        <h1 className="font-semibold text-3xl text-center">SignUp here</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="Name"
                className="input focus:outline-none"
                placeholder="Enter your name"
              />
              <label className="label">Photo Url</label>
              {/* this comment just for new commit  */}
              <input
                type="text"
                name="photoUrl"
                className="input focus:outline-none"
                placeholder="Pest photo"
              />
              <label className="label">Email</label>
              {/* this comment just for commit  */}
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="Email"
                required
              />
              <label className="label flex flex-col items-start relative">
                <label htmlFor="">Password</label>
                <input
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  className="input focus:outline-none"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-8 top-9.5 z-10"
                  onClick={handleShowBtn}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </span>
              </label>
              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
              {success && <span className="text-green-500">{success}</span>}
              {error && <span className="text-red-500">{error}</span>}
              <p className="text-center mt-4 text-md">
                Already have an account?{" "}
                <Link className="text-blue-500 text-lg" to={"/login"}>
                  Login
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

export default SignUp;
// end task 