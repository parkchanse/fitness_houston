import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav({hoverHeader}){
    // eslint-disable-next-line
    const [hoverName, setHoverName] = useState("")  // 헤더의 요소중 하나를 선택했을때 Nav가 나오게 하는 부분
    const [choices, setChoices] = useState({
        brand: false,
        machine: false,
        shop: false,
        notice: false,
        pt: false
    })
    const [navControl, setNavControl] = useState(false) // Nav 표시 유무를 관리함
    const choiceDiv = (e) => {
        const choice = e.target.getAttribute("choice")  // 해당 div의 choice 속성 값을 가져옴
        setHoverName(choice)
        setNavControl(true)

        setChoices(prevChoices => ({
            ...Object.keys(prevChoices).reduce((acc, key) => ({
                ...acc,
                [key]: key === choice
            }), {})
        }))
    }
    const hideNav = () => {
        setNavControl(false)
    }
    const continueNav = () => {
        setNavControl(true)
    }

    
    return(
        <div className={`hover_container ${hoverHeader? 'opacity_show': 'opacity_hide'}`}>
            <div className="header_showarea">
                <p className="header_logo">
                    <Link to="/announcement">Fitness<br/>Houston</Link>
                </p>
                <div className="hover_contents"
                onMouseOver={choiceDiv}>
                    <div choice="brand">브랜드</div>
                    <div choice="machine">머신</div>
                    <div choice="shop">매장</div>
                    <div choice="notice">소식</div>
                    <div choice="pt">PT</div>
                </div>
                <p>추가 컨텐츠</p>
            </div>
            
            <div className={`header_hide ${navControl? 'display_show': 'display_hide'}`}
            onMouseOver={continueNav}
            onMouseOut={hideNav}
            >
                <div className={`hide_section ${choices.brand? 'choice_show': 'display_hide'}`}>
                    <div>브랜드</div>
                    <div>BI</div>
                    <div>오시는 길</div>
                </div>
                <div className={`hide_section ${choices.machine? 'choice_show': 'display_hide'}`}>
                    <div>상체</div>
                    <div>하체</div>
                </div>
                <div className={`hide_section ${choices.shop? 'choice_show': 'display_hide'}`}>
                    <div>매장찾기</div>
                    <div>매장위치</div>
                </div>
                <div className={`hide_section ${choices.notice? 'choice_show': 'display_hide'}`}>
                    <div>
                        <Link to="/announcement">공지사항</Link>
                    </div>
                    <div>이벤트</div>
                    <div>FAQ</div>
                    <div>고객의 소리</div>
                </div>
                <div className={`hide_section ${choices.pt? 'choice_show': 'display_hide'}`}>
                    <div>상담안내</div>
                </div>
            </div>
        </div>
    )
}
export default Nav