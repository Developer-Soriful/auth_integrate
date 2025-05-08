import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/app_data.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (app) => app.category.toLowerCase() === "productivity"
        );
        setApps(filtered);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Main Layout || page</title>
      </Helmet>
      <div className="slider ">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-[500px]"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1720503225766-21dff692f754?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1721955487745-a2c3aea86d1c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <main
        style={{
          minHeight: "calc(100vh - 236px)",
        }}
      >
        <Outlet />
      </main>

      <div className="w-11/12 mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-400 mb-10">
          🚀 Boost Your Productivity
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-gray-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-indigo-300 mb-1">
                {app.name}
              </h2>
              <p className="text-gray-300 text-sm mb-3">{app.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-400">⭐ {app.rating}</span>
                <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-lg text-white text-sm">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
