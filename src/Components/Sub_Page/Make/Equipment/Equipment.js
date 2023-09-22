import React from "react";
import './Equipment.css'

function Equipment(){ 
  const scroll = (direction) => {
    const scrollAmount = 800; // Adjust this value to control the scrolling speed
    const container = document.querySelector('.slider-container');
    
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  return(
    <div className="goods">
      <div className="goods_category">
        <div className="slider-container">
          <div className="good_category_img"><div className="view_all">전체보기</div></div>
          <div className="good_category_img">
            <img src={require('../../../../asset/imgs/카테고리이미지(스미스짐).jpg')} alt="스미스짐" />
            <div className="asd"><h1>스미스</h1></div>
          </div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(멀티짐).jpg')} alt="멀티짐" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(멀티랙).jpg')} alt="멀티랙" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(벤치).jpg')} alt="벤치" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(벤치프레스).jpg')} alt="벤치프레스" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(런닝머신).jpg')} alt="런닝머신" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(사이클).jpg')} alt="사이클" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(로잉머신).jpg')} alt="로잉머신" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(일립티컬).jpg')} alt="일립티컬" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(복싱).jpg')} alt="복싱" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(스미스짐).jpg')} alt="스미스짐" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(멀티짐).jpg')} alt="멀티짐" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(멀티랙).jpg')} alt="멀티랙" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(벤치).jpg')} alt="벤치" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(벤치프레스).jpg')} alt="벤치프레스" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(런닝머신).jpg')} alt="런닝머신" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(사이클).jpg')} alt="사이클" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(로잉머신).jpg')} alt="로잉머신" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(일립티컬).jpg')} alt="일립티컬" /></div>          
          <div className="good_category_img"><img src={require('../../../../asset/imgs/카테고리이미지(복싱).jpg')} alt="복싱" /></div> 
        </div>
        <button className="slide-button left" onClick={() => scroll('left')}>←</button>
        <button className="slide-button right" onClick={() => scroll('right')}>→</button>
      </div>
      <div className="goods_area"></div>
    </div>
  )
}

export default Equipment