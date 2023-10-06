/* eslint-disable */

import './Article04.css'
import Data_Article04 from './Data_Article04/Data_Article04'

function Article04() {
    return (
        <div className='Article04'>
            <div className='header'>
                <h1>설치사례</h1>
            </div>
            <div className='Article04_Slider'>
                <ul className='Aricle04_container'>
                    {Data_Article04.map( (item, id) => {
                        return <li key = {item.id}
                            className = "Article04_Slider_li"
                        >
                            <a href="#">
                                <div className="Article04_banner">
                                    <img src = {item.img[`img0${id+1}`]} alt="배너이미지"/>
                                </div>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Article04