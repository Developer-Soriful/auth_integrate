import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <Helmet>
        <title>Home || page</title>
      </Helmet>
      <header className="w-11/12 mx-auto">
        <Header />
      </header>
      <main>
        <MainLayout />
      </main>
      <footer className="bg-base-200">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
