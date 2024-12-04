import React, {useState} from "react";

export default function Counter({onClick, totalCount}){
   const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  return(
    <div>
      <span className="number">{count} / <span className="total">{totalCount}</span></span>
      {/* <button className="button" onClick={()=>{
          increment();
          increment();
          increment();
      }}>Add +3</button> */}
      <button className="button" onClick={()=>{
          setCount(count+1);
          onClick();
          //increment();
      }}>Add +1</button>
    </div>
  );
}
