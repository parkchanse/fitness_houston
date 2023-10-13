import React from "react";
import './Sub_Page.css'
import ConHead from "./Make/Head/ConHead";
import ConBanner from "./Make/Banner/ConBanner";
import Equipment from './Make/Equipment/Equipment'
import Header from "../Common_Contents/Header/Header";
import Footer from "../Common_Contents/Footer/Footer";
import Information from '../Sub_Page/Login/Information'


function Sub(){
  return(
    <div className="Sub_Page">
      <Header />

      <ConHead/>
      <ConBanner/>
      <Equipment/>
      {/* <Information/> */}

      <Footer />
    </div>
  )
}


export default Sub