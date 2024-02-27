import { useEffect, useState } from "react";
import { NEWS_CATEGORY_DATA_URL, NEWS_DATA_URL } from "../utils/constants";
import { useLocation } from "react-router-dom";

const useNewsData = () => {
  const [generalNews, setGeneralNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxLimit, setMaxLimit] = useState(10);
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [page, maxLimit, location]);

  useEffect(() => {
    setCategoryNews([]);
  }, [location]);

  const fetchData = async () => {
    setLoading(true);
    const category = location.pathname.split("/").pop();

    const apiUrl =
      location.pathname === "/"
        ? NEWS_DATA_URL
        : NEWS_CATEGORY_DATA_URL + "%2F" + category;
    const queryParams =
      apiUrl === NEWS_DATA_URL ? `&max_limit=${maxLimit}` : `%3Fpage%3D${page}`;

    const response = await fetch(`${apiUrl}${queryParams}`);
    const json = await response.json();

    if (location.pathname === "/") {
      setGeneralNews(json?.data?.news_list);
      setCategoryNews([]);
    } else {
      setCategoryNews((prevCategoryNews) => [
        ...prevCategoryNews,
        ...json?.data?.news_list,
      ]);
    }
    setLoading(false);
  };

  const loadmore = () => {
    if (location.pathname === "/") {
      setMaxLimit((prevLimit) => prevLimit + 10);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return {
    news: location.pathname === "/" ? generalNews : categoryNews,
    loading,
    loadmore,
  };
};

export default useNewsData;
