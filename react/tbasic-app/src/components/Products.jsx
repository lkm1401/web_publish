import { useState, useEffect } from "react";

export default function Products(){
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false); //체크박스 이벤트상태 저장
  const handleChange = () => setChecked(!checked);

  useEffect(()=>{
    fetch(`data/${checked ? 'sale_' : ''}products.json`) //무한루프로 실행!!
    .then((res)=> res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch(()=>{
      console.log('error')
    });

    return (()=>{
      console.log("패치 후 정리해야 하는 청소작업 진행!!")
    });
  } , [checked]);
 

  return(
    <div>
      <h1>show products!!!</h1>
      <input type="checkbox" id="checkbox" onChange={handleChange}></input>
      <label htmlFor="checkbox">Show only Sale!!</label>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>name : {product.name}</h3>
            <h3>price : {product.price}</h3>
            <h3>id : {product.id}</h3>
          </li>
        ))}        
      </ul>
    </div>
  );
}