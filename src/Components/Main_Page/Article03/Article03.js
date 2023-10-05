/* eslint-disable */

import React from 'react'
import Data_Article03 from './Data_Article03/Data_Article03'
import './Article03.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons"

function Article03() {
    return (
        <div className='Article03'>
            <h1>짐박스 시리즈</h1>
            <div className='Article03_Slider'>
                <div className='Article03_Slider_Container'>
                    <ul className='Article03_Slide'>
                       {Data_Article03.map((item, id) => {
                            return <li key={item.id}
                                className='Article03_Slider_li'
                            >
                                <a href='#'>
                                    <div className='Article03_box'>
                                        <div className='Article03_img'>
                                           <img src={item.img[`img0${id + 1}`]} alt="이미지박스" />
                                        </div>
                                        <div className='Article03_Textbox'>
                                            <p>{item.Title}</p>
                                            <span className='Article03_text1'>{item.text1}</span>
                                            <span className='Article03_text2'>{item.text2}</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                       })}
                    </ul>
                <span ><FontAwesomeIcon icon={faChevronLeft} className='Left'/></span>
                <span ><FontAwesomeIcon icon={faChevronRight} className='Right'/></span>
                </div>

            </div>
        </div>
    )
}

export default Article03