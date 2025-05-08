import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      setMessage("Profile updated successfully!");

      setTimeout(() => {
        user.reload();
      }, 1000);
    } catch (error) {
      console.error("Profile update failed:", error);
      setMessage("Failed to update profile.");
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Profile || page</title>
      </Helmet>
      <header className="w-11/12 mx-auto">
        <Header />
      </header>

      <main
        className="flex justify-center items-center"
        style={{
          minHeight: "calc(100vh - 236px)",
        }}
      >
        <section className="bg-gray-800 rounded-lg shadow-md p-6 mt-8 w-full max-w-md">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-700 mr-4">
              <img src={user?.photoURL} className="rounded-full" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Change Info
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered input-primary w-full max-w-xs focus:outline-none"
              />

              <label className="text-white">Photo URL</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered input-primary w-full max-w-xs focus:outline-none"
              />

              <button onClick={handleUpdate} className="btn btn-primary mt-4">
                Update Profile
              </button>

              {message && <p className="text-green-400 mt-2">{message}</p>}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-base-200">
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
