/* eslint-disable */

import './Article02.css'
import Data_Article02 from './Data_Article02/Data_Article02'

function Article02() {
    return (
        <div className='Article02'>
            <div className='header'>
                <h1>신상품</h1>
            </div>
            <div className='Article02_Slider'>
                <ul className='Aricle02_container'>
                    {Data_Article02.map( (item, id) => {
                        return <li key = {item.id}
                            className = "Article02_Slider_li"
                        >
                            <a href="#">
                                <div className="Article02_banner">
                                    <img src = {item.img[`banner0${id+1}`]} alt="배너이미지01"/>
                                </div>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Article02