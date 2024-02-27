import React from "react";

import Card from "./Card.jsx";

const NewsList = ({ news }) => {
  return (
    <div className="news-container">
      {news.map((data) => (
        <Card key={data?.hash_id} data={data} />
      ))}
    </div>
  );
};

export default NewsList;
