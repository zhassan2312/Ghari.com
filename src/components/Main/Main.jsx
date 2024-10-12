import React from "react";
import Slider from "../Main/Slider/Slider";
import Category from "../Main/Category/Category";
import Collection from "../Main/Collection/Collection";
import Banner from "../Main/Banner/Banner";

const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
      <Collection />
      <Banner />
    </div>
  );
};

export default Main;