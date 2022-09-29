import React from "react";
import "./style.css";
export const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/assets/img/banner.webp"
        style={{
          width: "60%",
          height: 400,
        }}
        alt="Banner"
      />
    </div>
  );
};
