import React from "react";
import { Link } from "react-router-dom";

import ErrorImg from "../assets/errorpageimg.jpg";

const Error = () => {
  return (
    <div className="error">
      <img src={ErrorImg} className="md:w-[45%] mx-auto mt-20" />
      <p className="text-xl text-center md:text-2xl my-4 font-semibold">
        Lost in the news? Don't worry, we'll guide you back to the headlines.
      </p>
      <Link to="/">
        <button className="my-5 bg-red py-2 md:py-3 px-4 md:px-6 rounded-lg text-xl md:text-2xl text-white">
          Back to Headlines
        </button>
      </Link>
    </div>
  );
};

export default Error;
