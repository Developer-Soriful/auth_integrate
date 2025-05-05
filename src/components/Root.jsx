import MainLayout from "../layouts/MainLayout";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <div className="flex flex-col gap-8">
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
