import { Children } from 'react';  //Children --> children
import './Header.css';

export default function Navbar({children}){
  return(
    <header>
      {children}    
    </header>
  );
}