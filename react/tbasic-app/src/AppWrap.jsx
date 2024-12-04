import React, { Children } from "react";
import Navbar from "./components/Navbar";
import HeaderImg from "./components/header/HeaderImg";
import HeaderSearch from "./components/header/HeaderSearch";
import './App.css';


export default function AppWrap(){
  return(
    <div>
      <Navbar>  
        <HeaderSearch />      
        <HeaderImg />        
      </Navbar>
      {/* <Content>
        
      </Content>
      <Footer>

      </Footer> */}
     
    </div>
  );
}