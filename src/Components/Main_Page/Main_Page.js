import './Main_page.css'

function Main_Page() {
    return (
        <div className="test">
            <h1>메인페이지 영역입니다.</h1>
import Main from './Main/Main'
import Article01 from './Article01/Article01'
import Article02 from './Article02/Article02'
import Article03 from './Article03/Article03'
import Article04 from './Article04/Article04'
import Article05 from './Article05/Article05'
import Article06 from './Article06/Article06'
import Article07 from './Article07/Article07'
import Article08 from './Article08/Article08'
import Article09 from './Article09/Article09'

function Main_Page() {
    return (
        <div className="Wrap">
            <Main />
            <Article01 />
            <Article02 />
            <Article03 />
            <Article04 />
            <Article05 />
            <Article06 />
            <Article07 />
            <Article08 />
            <Article09 />
        </div>
    )
}

export default Main_Page