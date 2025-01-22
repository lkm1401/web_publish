import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import { TbStarFilled } from "react-icons/tb";

export default function StarRating({ totalRate, className }) {
  return (
    <div className="star-rating">
      {[...Array(totalRate)].map((_, i) => (
        <span key={i} className={className}>
          {/* <FaStar /> */}
          {/* <LiaStarSolid /> */}
          <TbStarFilled />
        </span>
      ))}
      { className === "star-black-big"  && 
        <>
          <span className={className.concat(" number")}>{totalRate} /</span>
          <span className={className.concat(" tot-number")}>{totalRate}.0</span>
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
