import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import useWindowSize from "../hooks/useWindowSize";
import { categories } from "../utils/Categories";

const Category = () => {
  const size = useWindowSize();
  const [isDesktopSize, setIsDesktopSize] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsDesktopSize(size?.width && size.width < 1390 ? false : true);
  }, [size]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isDesktopSize ? (
        <div className="categories-full">
          {categories.map((category) => {
            return (
              <div key={category.id}>
                <Link to={category.route}>
                  <h1 className="hover:underline font-semibold">
                    {category.title}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="category-menu">
          <button
            onClick={handleMenu}
            className="fixed ml-3 md:ml-6 mt-[-56px] z-50"
          >
            {!isMenuOpen ? <Menu /> : <X />}
          </button>

          <div
            className={`category-menu-list ${
              isMenuOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
          >
            {categories.map((category) => {
              return (
                <div className="mx-2" key={category.id}>
                  <Link to={category.route}>
                    <h1
                      onClick={handleMenu}
                      className="hover:underline font-semibold"
                    >
                      {category.title}
                    </h1>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
