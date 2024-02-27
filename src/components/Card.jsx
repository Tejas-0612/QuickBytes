import React from "react";

import { ImgShimmer } from "./Shimmer";
import { formatMilliseconds } from "../utils/utils";

const Card = ({ data }) => {
  const {
    author_name,
    title,
    image_url,
    content,
    created_at,
    source_name,
    source_url,
  } = data?.news_obj || {};

  const handleImageError = () => {
    return <ImgShimmer />;
  };

  if (data.type != "NEWS") return;

  return (
    <div className="news-card">
      <div className="card-img-container">
        <img
          className="card-img"
          width={360}
          height={320}
          src={image_url}
          onError={handleImageError}
        />
      </div>
      <div className="card-info-container">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <div className="flex mt-2">
            <p className="text-sm py-2">
              <b>Byte</b> by {author_name && <>{author_name}</>} /{" "}
              {formatMilliseconds(created_at)}
            </p>
          </div>
          <p className="py-2 text-base pr-3 text-pretty ">{content}</p>
        </div>
        <p className="pb-4">
          read more at{" "}
          <a
            href={source_url}
            target="_blank"
            className="font-semibold cursor-pointer"
          >
            {source_name}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
