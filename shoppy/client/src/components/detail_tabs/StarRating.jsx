import React, { useState } from "react";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { TbStar } from "react-icons/tb";

export default function StarRating({ totalRate, className }) {
  const stars = [...Array(5)];
  const color = (className === "star-coral") ? "coral" : "black";

  const fillStars = Math.floor(totalRate); // 채워진 별 개수
  const halfStar = totalRate % 1 !== 0; // 반별 여부
  const emptyStars = 5 - fillStars - (halfStar ? 1 : 0); // 빈 별 개수
  
  
  return (
    <div className="star-rating">
      {/** totalRate 값이 정수인 경우 - totalRate에 해당하는 별만 출력 : 반별 출력 ❌ */}
      {/* {stars.map((_, i) => (
        <span key={i} className={className}>
          <TbStarFilled />
        </span>
      ))}  */}

      {/** totalRate 값이 정수인 경우 - 기본 5개 표시 후 채우는 형식 : 반별 출력 ❌ */}
      {/* { [...Array(totalRate)].map((_, i) => (
        <span key={i} className={i < totalRate ? className.concat(" ", color) : "empty-star"}>
          {i < totalRate ? <TbStarFilled /> : <TbStar />}
        </span>
      ))} */}


      {/** totalRate 값에 소수도 포함된 경우 : 반별 출력 ⭕ */}
      {/** 채워진 별 : ⭐ */}
      { [...Array(fillStars)].map((_, i) => (
        <span key={i} className= {className.concat(" ", color)}>
          <TbStarFilled /> 
        </span>
      ))}

      {/** 반만 채워진 별 : ⭐ */}
      { halfStar && 
        <span key={halfStar} className= {className.concat(" ", color)}>
          <TbStarHalfFilled />
        </span>
      }

      {/** 빈 별 : ⭐ */}
      { [...Array(emptyStars)].map((_, i) => (
        <span key={i} className= "empty-star">
          <TbStar />
        </span>
      ))}


      { className === "star-black-big"  && 
        <>
          <span className={className.concat(" number")}>{totalRate} /</span>
          <span className={className.concat(" tot-number")}>{totalRate}</span>
        </>
      }      
      { className === "star-coral"  && 
        <>
          <span className={className.concat(" number")}>{totalRate}</span>
        </>
      }      
    </div>
  );
}
