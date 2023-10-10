import React from "react";
import './Sub_Page.css'
import ConHead from "./Make/Head/ConHead";
import ConBanner from "./Make/Banner/ConBanner";
import Equipment from './Make/Equipment/Equipment'
// import Login from "./Login/Login";


function Sub(){
  return(
    <div className="Sub_Page">
      <ConHead/>
      <ConBanner/>  
      <Equipment/>    
      {/* <Login/> */}
    </div>
  )
}


export default Sub