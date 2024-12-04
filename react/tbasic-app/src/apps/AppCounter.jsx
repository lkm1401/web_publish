import './App.css';
import Counter from '../components/Counter';
import React, {useState} from 'react';

function App() { 
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = (event)=> setTotalCount((prev)=> prev +1);
  
  return (
    <>
      <div className ="container">
        <div className ="banner">Total : {totalCount}</div>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
      </div>
    </>
  );
}

export default App;
