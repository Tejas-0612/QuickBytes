import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Category from "../Category";

const Header = () => {
  return (
    <>
      <div className="w-full flex md:flex-col justify-center sticky top-0 bg-white shadow-lg z-10">
        <Link to="/">
          <img src={Logo} className="w-60 mx-auto mt-4 mb-2" />
        </Link>
      </div>
      <Category />
    </>
  );
};

export default Header;
