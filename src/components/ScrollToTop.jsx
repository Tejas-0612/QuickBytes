import React, { useEffect, useState } from "react";

import UpArrow from "../assets/up-arrow.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      src={UpArrow}
      className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}
      onClick={backToTop}
    />
  );
};

export default ScrollToTop;
