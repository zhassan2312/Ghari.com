import React from "react";
import Slider from "../Main/Slider/Slider";
import Category from "../Main/Category/Category";
import Collection from "../Main/Collection/Collection";
import Banner from "../Main/Banner/Banner";
import Trend from "../Main/Trend/Trend";

const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
      <Collection />
      <Banner />
      <Trend />
    </div>
  );
};

export default Main;