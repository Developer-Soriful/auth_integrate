import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Header />
      </header>
      <div className="w-11/12 mx-auto py-10 text-white space-y-6">
        <h1 className="text-4xl font-bold text-center text-indigo-400">
          📱 About This App Store
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
            📘 Our Mission
          </h2>
          <p className="text-indigo-200">
            Our goal is to bring the most useful, trending and secure apps in
            one place. Whether you're looking for productivity tools or fun
            games, this store helps you find them easily.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
            ⚙️ Key Features
          </h2>
          <ul className="list-disc ml-6 text-indigo-200 space-y-1">
            <li>Top Rated Apps</li>
            <li>Productivity App</li>
            <li>Gaming App</li>
            <li>Education App</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
            🧑‍💻 Built By
          </h2>
          <p className="text-indigo-200">
            This app store is developed by a passionate front-end developer who
            loves clean UI and smooth UX. Built with React and Tailwind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
            🔒 Trust & Safety
          </h2>
          <p className="text-indigo-200">
            All apps listed here are reviewed and safe to explore. We don’t
            allow harmful content.
          </p>
        </section>
      </div>
      <footer className=" bg-base-200">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
