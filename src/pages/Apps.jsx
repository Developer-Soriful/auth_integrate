import React from "react";
import { useLoaderData } from "react-router";
import TradingApps from "./TradingApps";
import ProductivityApp from "./ProductivityApp";
import GamingApp from "./GamingApp";
import EducationApp from "./EducationApp";

const Apps = () => {
  const apps = useLoaderData();
  const tradingApps = apps.filter((app) => app.highlighted_rating);
  const productivity = apps.filter((app) => app.category === "Productivity");
  const gamingApp = apps.filter((app) => app.category === "Gaming");
  const educationApp = apps.filter((app) => app.category === "Education");
  return (
    <div className="my-6">
      <h1 className="text-2xl my-6">Top rating</h1>
      <div className="tradingApps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tradingApps.map((app, index) => (
          <TradingApps key={index} app={app} />
        ))}
      </div>
      <h1 className="text-2xl my-6">Productivity App</h1>
      <div className="productivity grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productivity.map((app, index) => (
          <ProductivityApp key={index} app={app} />
        ))}
      </div>
      <h1 className="text-2xl my-6">Gaming App</h1>
      <div className="productivity grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gamingApp.map((app, index) => (
          <GamingApp key={index} app={app} />
        ))}
      </div>
      <h1 className="text-2xl my-6">Education App</h1>
      <div className="productivity grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {educationApp.map((app, index) => (
          <EducationApp key={index} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
