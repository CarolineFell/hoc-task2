import React from "react";
import shortid from "shortid";
import Video from "../Video/Video";
import Article from "../Article/Article";
import rating from "../Rating/Rating";

const RatingVideo = rating(Video);
const RatingArticle = rating(Article);

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        return <RatingVideo {...item} key={shortid.generate()} />;
      case "article":
        return <RatingArticle {...item} key={shortid.generate()} />;
      default:
        return "";
    }
  });
}

export default List;