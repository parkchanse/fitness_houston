import React, {useState, useRef} from "react";
import Paging from "../../Components/Common_Contents/Paging/Paging";
import React, {useState} from "react";
import './Announcement.css'

function Announcement(){
    const [author, setAuthor] = useState("")        // 작성자
    const [title, setTitle] = useState("")          // 제목
    const [num, setNum] = useState(0)
    const [contents, setContents] = useState("")    // 내용
    const [listitems, setListItems] = useState([])  // 작성 리스트 관리
    const [modal, setModal] = useState(false)       // 작성 모달
    const [update, setUpdate] = useState(-1)     // 수정 모달, -1은 현재 수정중이 아님을 나타냄
    const [viewContents, setViewContents] = useState([])    // 제목 클릭 시 내용 부분 보이기 / 숨기기
    const inputRef = useRef(null)
    const [view, setView] = useState(0)             // 조회수
    const [listitems, setListItems] = useState([])  // 작성 리스트 관리
    const [modal, setModal] = useState(false)       // 작성 모달

    const today = new Date()
    const year = today.getFullYear().toString().slice(-2)
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    const day = today.getDate().toString().padStart(2, '0')
    const formattedDate = `${year}. ${month}. ${day}`   // 작성 날짜 표시 부분


    const popupModal = (e) => {  // 작성 모달을 나타내주는 부분
        e.preventDefault()
        setModal(true)
        document.body.style = 'overflow: hidden'   // 글쓰기 버튼을 누르면 스크롤을 막는 부분
        window.scrollTo(0, 0)   // 글쓰기 버튼 클릭 시 0,0 스크롤 위치로 이동

        inputRef.current.focus()
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
            id: num,    // 각 목록에 id 부여
            author: author,
            title: title,
            contents: contents,
            viewCount: 0
        }

        if(author === '' || title === '' || contents === ''){
            alert('입력되지 않은 곳이 있습니다.')
        }else{
            setListItems([newItem, ...listitems])   // 새로운 아이템을 앞에 추가
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

    const contents_open = (id) => {
        const contentsState = [...viewContents] 
        const index = listitems.findIndex(item => item.id === id)  // 인덱스를 id로 바꿔주는 부분
        contentsState[id] = !contentsState[id]
        setViewContents(contentsState)          // 제목 눌렀을 시 내용 부분 조절해주는 토글 부분

        if(contentsState[id] === true){  // 제목 클릭시 조회수 증가
            const addViews = [...listitems]
            addViews[index].viewCount += 1
            setListItems(addViews)
        }
    }

    const update_popup = (id) => {  // 수정 모달을 나타내주는 부분
        setUpdate(id)
        document.body.style = 'overflow: hidden'   // 글쓰기 버튼을 누르면 스크롤을 막는 부분
    }
    const close_update_popup = () => {  // 취소 클릭시 수정 모달을 사라지게 하는 부분
        setUpdate(-1)   // -1로 되돌림으로써 수정중이 아님을 나타냄
        setAuthor('')
        setTitle('')
        setContents('')
        document.body.style = 'overflow: auto'  // 스크롤을 다시 사용할 수 있게 하는 부분
    }
    const update_done = () => {
        if(update === -1) return;
        const index = listitems.findIndex(item => item.id === update)
        const newListItems = [...listitems]

        if(author === '' || title === '' || contents === ''){
            alert('입력되지 않은 곳이 있습니다.')
        }else{
            newListItems[index].author = author
            newListItems[index].title = title
            newListItems[index].contents = contents

            setListItems(newListItems)
            setUpdate(-1)
            setAuthor('')
            setTitle('')
            setContents('')
            document.body.style = `overflow: auto`
        }
    }

    const contents_delete = (id) => {
        const newListItems = [...listitems]
        const index = listitems.findIndex(item => item.id === id)

        if(window.confirm('정말 삭제하시겠습니까?')){
            newListItems.splice(index, 1)
            setListItems(newListItems)
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
                    {listitems.map((item, index) => (    // .slice(0).reverse() : 배열 뒤집기
                    <tbody key={item.id}>
                        <tr className="contents_list">
                            <td>{listitems.length - index}</td>
                            <td className="tbody_title"><span className="today_title_name" onClick={() => contents_open(item.id)}>{item.title}</span></td>
                            <td>{item.author}</td>
                            <td>{formattedDate}</td>
                            <td>{item.viewCount}</td>
                        </tr>
                        <tr>
                            <td colSpan="5" className={`tbody_contents ${viewContents[item.id]? 'table_show': 'hide'}`}><pre className="contents_pre">{item.contents}</pre>
                                <div className="contents_btns">
                                    <button onClick={() => update_popup(item.id)}>수정</button>
                                    <button onClick={() => contents_delete(item.id)}>삭제</button>
                                </div>
                            </td>
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
            <Paging></Paging>

            {/* 모달 팝업 부분 */}
            <div className={`create_modal ${modal? 'show': 'hide'}`}>
                <h1>공지사항 작성</h1>
                <div className="create_modal_contents">
                    <div className="create_author">
                        <span>작성자</span>
                        <input type="text" placeholder="작성자를 입력해주세요."
                        value={author} onChange={(e) => setAuthor(e.target.value)} ref={inputRef} autoFocus />
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

            {/* 수정 모달 팝업 부분 */}
            <div className={`update_modal ${update !== -1? 'show': 'hide'}`}>
                <h1>공지사항 수정</h1>
                <div className="create_modal_contents">
                    <div className="update_author">
                        <span>작성자</span>
                        <input type="text" placeholder="작성자를 입력해주세요."
                        value={author} onChange={(e) => setAuthor(e.target.value)} ref={inputRef} autoFocus />
                    </div>
                    <div className="update_title">
                        <span>제목</span>
                        <input type="text" placeholder="제목을 입력해주세요."
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="update_contents">
                        <span>내용</span>
                        <textarea type="text" placeholder="내용을 작성해주세요."
                        value={contents} onChange={(e) => setContents(e.target.value)} />
                    </div>
                    <div className="create_btns">
                        <button onClick={update_done}>완료</button>
                        <button onClick={close_update_popup}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcement