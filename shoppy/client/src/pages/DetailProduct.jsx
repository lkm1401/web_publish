import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import Detail from "../components/detail_tabs/Detail.jsx";
import Review from "../components/detail_tabs/Review.jsx";
import ImageList from "../components/commons/ImageList.jsx";
import StarRating from "../components/commons/StarRating.jsx";
import axios from "axios";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../auth/AuthContext.js";
import { useCart } from "../hooks/useCart.js";


export default function DetailProduct() {
  const { saveToCartList, updateCartList } = useCart();
  const navigate = useNavigate();
  const { isLoggedIn} = useContext(AuthContext);
  const { cartList } = useContext(CartContext);
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [imgList, setImgList] = useState([]);
  const [detailImgList, setDetailImgList] = useState([]);
  const [size, setSize] = useState("XS");
  const [tabName, setTabName] = useState('detail');
  const tabLabels = ['DETAIL', 'REVIEW', 'Q&A', 'RETURN & DELIVERY'];
  const tabEventNames = ['detail', 'review', 'qna', 'return'];

  useEffect(() => {
    axios
      .post("http://localhost:9000/product/detail", {"pid":pid}) 
      .then((res) => {
          setProduct(res.data);
          setImgList(res.data.imgList);
          setDetailImgList(res.data.detailImgList);
        })
      .catch((error) => console.log(error));
  }, []);

  
  /** 장바구니 추가 버튼 이벤트 */
  const addCartItem = () => {
    if(isLoggedIn) {
        const cartItem = { pid: product.pid,   size: size,  qty: 1 };
        const findItem = cartList && cartList.find(item => item.pid === product.pid 
                                            && item.size === size);                                  
        if(findItem !== undefined) {  
            //qty+1 업데이트      
            const result = updateCartList(findItem.cid, "increase");
            result && alert("장바구니에 추가되었습니다.");
        } else {
            //새로 추가
            const id = localStorage.getItem("user_id");
            const formData = {id:id, cartList:[cartItem]};
            const result = saveToCartList(formData);
            result && alert("장바구니에 추가되었습니다.");
        }                                            
    } else {
      const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
      if(select) {
          navigate('/login');
      }    
    }
  };
  

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image}   />
          <ImageList className="product-detail-image-top-list"
                      imgList={imgList}/>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li className="product-detail-subtitle-star">
            <StarRating totalRate={4.2} className="star-coral"/> <span>572개 리뷰 &nbsp;&nbsp; {">"}</span>
          </li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
          <li className="flex">
            <button className="product-detail-button size">사이즈 </button>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className="flex">
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
            <button
              type="button"
              className="product-detail-button cart"
              onClick={addCartItem}
            >
              쇼핑백 담기
            </button>
            <div type="button" className="gift">
              <PiGiftThin />
              <div className="gift-span">선물하기</div>
            </div>
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">

        {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY */}
        <ul className="tabs">
          {
            tabLabels.map((label, i) => 
                <li className={tabName === tabEventNames[i] ? "active": ''}>
                  <button type="button" onClick={(e)=> setTabName(tabEventNames[i])}>{ label }</button>
                </li>
            )
          }
        </ul>
        <div className="tabs_contents">
          { tabName === "detail" && <Detail imgList={detailImgList} /> }
          { tabName === "review" && <Review /> }
        </div>
      </div>
    </div>
  );
}
