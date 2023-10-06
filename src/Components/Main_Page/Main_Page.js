import './Main_page.css'
import Main from './Main/Main'
import Article01 from './Article01/Article01'
import Article02 from './Article02/Article02'
import Article03 from './Article03/Article03'
import Article04 from './Article04/Article04'
import Article05 from './Article05/Article05'
import Article06 from './Article06/Article06'
import Article07 from './Article07/Article07'

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
        </div>
    )
}

export default Main_Page