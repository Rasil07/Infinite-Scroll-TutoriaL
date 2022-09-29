import React from "react";
import { Banner } from "../../components";

import "./style/home_style.css";

export const Home = () => {
  return (
    <div className="home_wrapper">
      <Banner />
      <div className="post_list_wrapper">{/* Render Post List here */}</div>
    </div>
  );
};
