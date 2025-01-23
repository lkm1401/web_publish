import React from "react";
import StarRating from "../commons/StarRating.jsx";
import ReviewType from "./ReviewType.jsx";
import ImageList from "../commons/ImageList.jsx";

export default function ReviewTop() {
  const list = [
    {
      title: "사이즈",
      names: ["적당함", "작음", "큼"],
      values: [73, 0, 27],
    },
    {
      title: "색상",
      names: ["같음", "비슷함", "다름"],
      values: [93, 7, 0],
    },
    {
      title: "소재",
      names: ["같음", "비슷함", "다름"],
      values: [89, 11, 0],
    },
  ];

  //review imgList
  const reviewImgList = [
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300"    
];

  return (
    <div className="review-top">
      <h3>상품 만족도 (569)</h3>
      <ul className="review-top-list">
        <li>
          <div>
            <p className="review-top-text">
              구매하신 분들의 상품에 대한 평점입니다.
            </p>
            <StarRating totalRate={4.2} className="star-black-big" />
          </div>
        </li>
        {list &&
          list.map((item) => (
            <li>
              <ReviewType
                title={item.title}
                names={item.names}
                values={item.values}
              />
            </li>
          ))}
      </ul>

      <ImageList imgList={reviewImgList} className="review-top-imglist"/>
    </div>
  );
}
