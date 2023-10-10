/* eslint-disable */

import React, {useEffect} from 'react';
import './asset/css/reset.css'
import './asset/css/App.css';
import Main_Page from './Components/Main_Page/Main_Page';
import Common_Contents from './Components/Common_Contents/Common_Contents'
import Sub_Page from './Components/Sub_Page/Sub_Page'
import Header from './Components/Common_Contents/Header/Header';
import Footer from './Components/Common_Contents/Footer/Footer';
import Announcement from './Pages/Announcement/Announcement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './Components/Common_Contents/ScrollTop/ScrollTop';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Main_Page />} />
          <Route path="sub" element={<Sub_Page />} />
          <Route path="/announcement" element={<Announcement />} />
        </Routes>
        
        <Footer/>
        <ScrollTop />   {/* 클릭했을때 최상단으로 이동 */}
      </BrowserRouter>
    </div>
  )
}

export default App;
