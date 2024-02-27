import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

import Logo from "../../assets/Footer.png";
import { categories } from "../../utils/Categories";
import { TEJAS_PORTFOLIO_URL } from "../../utils/constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-p1">
        <Link to="/" className="flex flex-col">
          <img src={Logo} className="w-60" />
          <p className="text-sm text-gray-600 mt-[-6px] text-center">
            Bite-sized News for the Mobile Generation
          </p>
        </Link>
        <div className="footer-hr"></div>
      </div>

      <div className="px-4 md:px-16">
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
          {categories.map((category) => (
            <Link
              to={category.route}
              key={category.id}
              className="mx-2 text-sm cursor-pointer hover:underline hover:font-semibold"
            >
              {category.title}
            </Link>
          ))}
        </ul>
      </div>

      <div className="footer-p3">
        <p className="text-xl mb-6 ">
          Developed by{" "}
          <span className="font-bold cursor-pointer hover:underline">
            {" "}
            <a href={TEJAS_PORTFOLIO_URL} target="_blank">
              Tejas
            </a>
          </span>{" "}
          💙
        </p>
        <div className="flex justify-evenly">
          <p className="cursor-pointer">
            <Linkedin />
          </p>
          <p className="cursor-pointer">
            <Github />
          </p>
          <p className="cursor-pointer">
            <Mail />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
