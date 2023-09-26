import React, {useState} from "react";
import './Header.css'
import Nav from "../Nav/Nav";

function Header() {
    const [hoverHeader, setHoverHeader] = useState(false)   // 기능 없는 헤더와 Nav와 연결된 기능이 있는 헤더를 구분하게 해주는 곳

    const headerContentsHover = () => {
        setHoverHeader(true)
    }
    const headerContentsHoverOut = () => {
        setHoverHeader(false)
    }
    
    return(
        <div className="header_container"
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
                <p>추가 컨텐츠</p>
            </div>
            <Nav hoverHeader={hoverHeader}></Nav>
        </div>
    )
}
export default Header