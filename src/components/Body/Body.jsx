import { useMemo } from "react";

import useNewsData from "../../hooks/useNewsData";
import ScrollToTop from "../ScrollToTop";
import Shimmer from "../Shimmer";
import NewsList from "../NewsList";

const Body = () => {
  const { news, loading, loadmore } = useNewsData(location);
  const memoizedNews = useMemo(() => news, [news]);

  return (
    <div className="body">
      <div className="my-8 relative">
        {loading ? <Shimmer /> : <NewsList news={memoizedNews} />}
      </div>
      <ScrollToTop />
      <button onClick={loadmore} className="loadmore-btn">
        Load More
      </button>
    </div>
  );
};

export default Body;
