import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DiResponsive } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaTabletAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Helmet } from "react-helmet-async";

const AppDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [allReviews, setAllReviews] = useState([]);
  const [install, setInstall] = useState(false);
  const [review, setReview] = useState(false);
  const detailsData = useLoaderData();
  const detailFind = detailsData.find((app) => app.id == id);
  // this function for handle install button
  const handleInstallBtn = () => {
    setInstall(!install);
    if (!install) {
      setReview(true);
    }
  };

  const {
    name,
    developer,
    thumbnail,
    banner,
    downloads,
    category,
    rating,
    description,
    features,
    reviews,
    userName,
    comment,
  } = detailFind;
  const handleCommentBtn = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const newReview = {
      userName: user.displayName || "Anonymous",
      photo: user.photoURL,
      rating: 5,
      comment: comment,
    };
    setAllReviews([...allReviews, newReview]);
  };
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Apps || page {id}</title>
      </Helmet>
      <header>
        <Header />
      </header>
      <main
        style={{
          minHeight: "calc(100vh - 296px)",
        }}
      >
        <div className="grid grid-cols-12 my-8  ">
          {/* Left section */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-8">
            <div className="flex justify-start items-center gap-4">
              <div className="lg:hidden ">
                <img
                  className="w-[100px] h-[100px] rounded-md"
                  src={thumbnail}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{name}</h1>
                <p className="text-green-600 font-medium">{developer}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Contains ads · In-app purchases
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4">
              <div>
                <p className="font-semibold">{rating}★</p>
                <p>30.3M reviews</p>
              </div>
              <div>
                <p className="font-semibold">{downloads}+</p>
                <p>Downloads</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={handleInstallBtn}
                className={`${
                  install
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-500 hover:bg-green-600"
                } text-white px-5 py-2 rounded-lg font-semibold w-full md:w-1/4`}
              >
                {install ? "Uninstall" : "Install"}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              This app is available for some of your devices
            </p>
          </div>

          {/* Right section */}
          <div className="col-span-3 hidden lg:block w-2/3 h-2/3">
            <img
              src={thumbnail}
              alt={name}
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
        {/* this section for describe */}
        <section>
          <h1 className="flex justify-start items-center my-4">
            {" "}
            <DiResponsive size={50} />
            <span className="text-gray-400">
              This app is available for some of your devices
            </span>
          </h1>
          <div className="">
            <div className="slider lg:w-1/2">
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
                    src={thumbnail}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={banner}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* write a review */}
            <div>
              <h1 className="text-2xl my-4">About this app</h1>
              <p className="my-4 text-gray-300 ">{description}</p>
            </div>
            <div className="flex justify-between items-center gap-10">
              <div>
                <h1 className="text-2xl my-4">Rating this app</h1>
                <p>Tell others what you think.</p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                    <IoIosPhonePortrait />
                    <span>Phone</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                    <FaTabletAlt />
                    <span>Tablet</span>
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  disabled={!review}
                  className={`my-4 px-6 py-4 rounded-md text-white transition-colors duration-300 ${
                    review
                      ? "bg-gray-800 hover:bg-gray-700 cursor-pointer"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                >
                  Write a review
                </button>
              </div>
            </div>
            {/* this part just for pop up and rating submit design */}
            <dialog id="my_modal_3" className="modal w-full">
              <form
                onSubmit={handleCommentBtn}
                className="modal-box flex flex-col justify-between items-start gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] ">
                    <img src={thumbnail} alt="" />
                  </div>
                  <div>
                    <p className="text-xl">{name}</p>
                    <p>Rate this app</p>
                  </div>
                </div>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div>
                  <div className="flex gap-3 justify-center items-center">
                    <img
                      className="w-[60px] h-[60px] rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <span>{user.displayName} </span>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm ">Comment Below</label>
                  <textarea
                    name="comment"
                    className="border border-gray-400 focus:outline-none p-2 rounded-md"
                    placeholder="Describe your experience with this app"
                  ></textarea>
                </div>
                <div>
                  <p>
                    Reviews are public and include your account and device info.
                    Everyone can see your Google Account name and photo, and the
                    type of device associated with your review. Developers can
                    also see your country and device information (such as
                    language, model, and OS version) and may use this
                    information to respond to you. Past edits are visible to
                    users and the app developer unless you delete your review.{" "}
                  </p>
                  <div className="flex justify-end">
                    <button
                      method="dialog"
                      type="submit"
                      className="bg-blue-500  text-white px-4 py-2 rounded-lg mt-4 cursor-pointer "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </dialog>
            {/* this part just for pop up and rating submit design end */}
            {/* rating length */}
            <div className="mt-10">
              <h1 className="text-2xl my-4 flex items-center gap-2">
                Ratings and reviews{" "}
                <FaArrowRight className="cursor-pointer hover:text-gray-300" />
              </h1>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                  <IoIosPhonePortrait />
                  <span>Phone</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                  <MdComputer />
                  <span>Chromebook</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                  <FaTabletAlt />
                  <span>Tablet</span>
                </button>
              </div>
            </div>
            {/* this is for rated person */}
            <div className="my-10 py-6 px-2 rounded ">
              {reviews.map((review, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center my-4">
                    <div className="flex justify-start items-center text-2xl gap-2">
                      <FaUserCircle size={40} />
                      <span>{review.userName}</span>
                    </div>
                    <div className="cursor-pointer">
                      <BsThreeDotsVertical size={20} />
                    </div>
                  </div>
                  <div>
                    <p>{review.rating} ⭐</p>
                    <p className="text-gray-400">{review.comment}</p>
                  </div>
                </div>
              ))}
              <div className="my-10 py-6 px-2 rounded">
                {allReviews.map((review, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center my-4">
                      <div className="flex justify-start items-center text-2xl gap-2">
                        {review.photo ? (
                          <img
                            src={review.photo}
                            className="w-[40px] h-[40px] rounded-full"
                            alt="User"
                          />
                        ) : (
                          <FaUserCircle size={40} />
                        )}
                        <span>{review.userName}</span>
                      </div>
                      <div className="cursor-pointer">
                        <BsThreeDotsVertical size={20} />
                      </div>
                    </div>
                    <div>
                      <p>{review.rating} ⭐</p>
                      <p className="text-gray-400">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
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

export default AppDetails;
