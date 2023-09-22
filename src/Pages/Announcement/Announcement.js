import React, {useState} from "react";
import './Announcement.css'

function Announcement(){
    const [author, setAuthor] = useState("")        // 작성자
    const [title, setTitle] = useState("")          // 제목
    const [num, setNum] = useState(0)
    const [contents, setContents] = useState("")    // 내용
    const [view, setView] = useState(0)             // 조회수
    const [listitems, setListItems] = useState([])  // 작성 리스트 관리
    const [modal, setModal] = useState(false)       // 작성 모달

    const today = new Date()
    const year = today.getFullYear().toString().slice(-2)
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    const day = today.getDate().toString().padStart(2, '0')
    const formattedDate = `${year}. ${month}. ${day}`   // 작성 날짜 표시 부분


    const popupModal = () => {  // 작성 모달을 나타내주는 부분
        setModal(true)
        document.body.style = 'overflow: hidden'   // 글쓰기 버튼을 누르면 스크롤을 막는 부분
        window.scrollTo(0, 0)   // 글쓰기 버튼 클릭 시 0,0 스크롤 위치로 이동
    }
    const closeModal = () => {  // 작성 모달을 사라지게 하는 부분
        setModal(false)
        setAuthor('')
        setTitle('')
        setContents('')
        document.body.style = 'overflow: auto'  // 스크롤을 다시 사용할 수 있게 하는 부분
    }

    const create_announcement = () => {
        const newItem = {
            author: author,
            title: title,
            contents: contents
        }

        if(author === '' || title === ''){
            alert('입력되지 않은 곳이 있습니다.')
        }else{
            setListItems([...listitems, newItem])
            setModal(false)
            setNum(num + 1)
            setAuthor('')
            setTitle('')
            setContents('')
            document.body.style = 'overflow: auto'
        }
    }

    const viewPlus = () => {
        setView(view + 1)   // 제목 클릭시 조회수 증가
    }

    return(
        <div className="announcement">
            <h1>피트니스 휴스턴 공지사항</h1>
            <p>피트니스 휴스턴의 공지사항을 알려드립니다.</p>
            <div className="table_area">
                <button className="create_btn" onClick={popupModal}>글쓰기</button>
                <table className="announcement_list">
                    <thead>
                        <tr>
                            <th className="thead_num">번호</th>
                            <th className="thead_title">제목</th>
                            <th className="thead_author">글쓴이</th>
                            <th className="thead_date">날짜</th>
                            <th className="thead_view">조회</th>
                        </tr>
                    </thead>
                    {listitems.slice(0).reverse().map((item, index) => (    // .slice(0).reverse() : 배열 뒤집기
                    <tbody>
                        <tr key={index}>
                            <td>{num - index}</td>
                            <td className="tbody_title"><span onClick={viewPlus}>{item.title}</span></td>
                            <td>{item.author}</td>
                            <td>{formattedDate}</td>
                            <td>{view}</td>
                        </tr>
                        <tr>
                            <td colSpan="5"><pre className="tbody_contents">{item.contents}</pre></td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>

            {/* 모달 팝업 부분 */}
            <div className={`create_modal ${modal? 'show': 'hide'}`}>
                <h1>공지사항 작성</h1>
                <div className="create_modal_contents">
                    <div className="create_author">
                        <span>작성자</span>
                        <input type="text" placeholder="작성자를 입력해주세요."
                        value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className="create_title">
                        <span>제목</span>
                        <input type="text" placeholder="제목을 입력해주세요."
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="create_contents">
                        <span>내용</span>
                        <textarea type="text" placeholder="내용을 작성해주세요."
                        value={contents} onChange={(e) => setContents(e.target.value)} />
                    </div>
                    <div className="create_btns">
                        <button onClick={create_announcement}>완료</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcement