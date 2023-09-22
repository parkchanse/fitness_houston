import React from "react";
import './Footer.css'
import {AiOutlineDown} from 'react-icons/ai'
import {AiOutlineUp} from 'react-icons/ai'

function Footer(){
    return(
        <div className="footer">
            <div className="footer_container">
                <div className="footer_top">
                    <div className="footer_header">
                        <div className="footer_header_text">
                            <div>회사소개</div>
                            <div>이용약관</div>
                            <div>위치정보이용약관</div>
                            <div>개인정보처리방침</div>
                            <div>이메일무단수집거부</div>
                            <div>사이버감사실</div>
                        </div>
                        <div className="footer_select">
                            <div className="footer_select_box">
                                <p>REFERENCE SITE</p><AiOutlineDown className="down_icon"/>
                                <div className="footer_select_hover">
                                    <div className="footer_hover_1">(주) 한샘<AiOutlineUp className="up_icon"/></div>
                                    <div className="footer_hover_1">짐박스</div>
                                    <div className="footer_hover_1">바디엑스</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom"></div>
            </div>
        </div>
    )
}
export default Footer