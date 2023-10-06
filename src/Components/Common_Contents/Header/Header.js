import React, {useEffect, useState} from "react";
import './Header.css'
import Nav from "../Nav/Nav";

function Header() {
    const [hoverHeader, setHoverHeader] = useState(false)   // 기능 없는 헤더와 Nav와 연결된 기능이 있는 헤더를 구분하게 해주는 곳
    const [scrollTop, setScrollTop] = useState(true)

    const headerContentsHover = () => {
        setHoverHeader(true)
    }
    const headerContentsHoverOut = () => {
        setHoverHeader(false)
    }

    const scrollTopStyle = () => {
        if(window.scrollY !== 0){
            setScrollTop(false)
        }else{
            setScrollTop(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollTopStyle)
    }, [])
    
    return(
        <div className={`header_container ${scrollTop? 'scroll_zero': 'scroll_not_zero'}`}
        onMouseOver={headerContentsHover}
        onMouseOut={headerContentsHoverOut}
        >
            <div className="header_showarea">
                <p className="header_logo">Fitness<br/>Houston</p>
                <div className="header_contents">
                    <div>브랜드</div>
                    <div>머신</div>
                    <div>매장</div>
                    <div>소식</div>
                    <div>PT</div>
                </div>
                <p>로그인</p>
            </div>
            <Nav hoverHeader={hoverHeader}></Nav>
        </div>
    )
}
export default Header