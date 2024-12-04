import { useState } from 'react';
import './App.css';
import Products from '../components/Products';

export default function AppToggle(){
  const [showProducts, setShowProducts] = useState(false);
  const handleClick = () => setShowProducts(!showProducts);

  return(
    <>
      <button onClick={handleClick}>Toggle</button>
      {showProducts && <Products />}      
    </>
  );
}