import React from "react";
import Slider from "../Main/Slider/Slider";
import Category from "../Main/Category/Category";
import Collection from "../Main/Collection/Collection";
const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
      <Collection />
    </div>
  );
};

export default Main;