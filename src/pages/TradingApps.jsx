import React from "react";
import { Link } from "react-router";

const TradingApps = ({ app }) => {
  const {
    id,
    name,
    developer,
    thumbnail,
    banner,
    downloads,
    category,
    rating,
    highlighted_rating,
    description,
    features,
    reviews,
    user,
    comment,
  } = app;

  return (
    <div>
      <Link to={`/appdetails/${app.id}`}>
        <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm  w-full">
          <span className="text-lg font-medium text-gray-700">{id}</span>
          <img
            src={thumbnail}
            alt="CapCut Icon"
            className="w-12 h-12 rounded-xl"
          />
          <div className="w-full">
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{developer}</p>
            <p className="text-sm text-gray-600">{rating}⭐</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TradingApps;
