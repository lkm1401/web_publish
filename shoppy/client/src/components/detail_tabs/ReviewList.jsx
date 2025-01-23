import React from 'react';
import { FaRegCircleQuestion } from "react-icons/fa6";
import ReviewListItem from './ReviewListItem.jsx';
import StarRating from '../commons/StarRating.jsx';

export default function ReviewList() {
  return (
    <div>
      <ul className="review-list-title">
        <li><button type="button" >최신순</button></li>
        <li><button type="button">평점 높은순</button></li>
        <li><button type="button">평점 낮은순</button></li>
        <li><button type="button">추천순<FaRegCircleQuestion /></button></li>
      </ul>
      <table className="review-list-content">
          <tbody>
              <tr>
                <td className="review-list-star"><StarRating totalRate={3.4} className="star-black-review"/></td>
                <td><ReviewListItem /></td>
              </tr>
              <tr>
                <td className="review-list-star"><StarRating totalRate={5} className="star-black-review"/></td>
                <td><ReviewListItem /></td>
              </tr>
              <tr>
                <td className="review-list-star"><StarRating totalRate={2.1} className="star-black-review"/></td>
                <td><ReviewListItem /></td>
              </tr>
              <tr>
                <td colSpan={2}>{"<<   "} 1 2 3 4 5 6 7 8 9 10 {"   >>"}</td>
              </tr>
          </tbody>
      </table>
    </div>
  );
}


