import './Main_page.css'
import Main from './Main/Main'
import Article01 from './Article01/Article01'
import Article02 from './Article02/Article02'
import Article03 from './Article03/Article03'

function Main_Page() {
    return (
        <div className="Wrap">
            <Main />
            <Article01 />
            <Article02 />
            <Article03 />
        </div>
    )
}

export default Main_Page