import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import Detail from "../components/detail_tabs/Detail.jsx";
import axios from "axios";

export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("XS");

  useEffect(() => {
    axios
      .get("/data/products.json") // http://localhost:3000/data/products.json
      .then((res) => {
        res.data.filter((product) => {
          if (product.pid === pid) setProduct(product);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
      pid: product.pid,
      size: size,
      qty: 1,
      price: product.price,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  };

  //Tabs event
  const [tabName, setTabName] = useState('detail');
  const handleChangeTabs = (text) => {
    console.log('tab name===>>', text);
    setTabName(text);
  }

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image} />
          <ul className="product-detail-image-top-list">
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
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
          <li className="active">
            <button type="button" onClick={(e)=> handleChangeTabs("detail")}>DETAIL</button>
          </li>
          <li >
            <button type="button" onClick={(e)=> handleChangeTabs("review")}>REVIEW</button>
          </li>
          <li>
            <button type="button" onClick={(e)=> handleChangeTabs("qna")}>Q&A</button>
          </li>
          <li>
            <button type="button" onClick={(e)=> handleChangeTabs("return")}>RETURN & DELIVERY</button>
          </li>
        </ul>
        <div className="tabs_contents">
          { tabName === "detail" && <Detail /> }
        </div>
      </div>
    </div>
  );
}
