/* eslint-disable */

import './Article07.css'
import Data_Article07 from './Data_Article07/Data_Article07'

function Article07() {
    return (
        <div className='Article07'>
            <div className='header'>
                <h1>뉴스룸</h1>
            </div>
            <div className='Article07_Slider'>
                <ul className='Aricle07_container'>
                    {Data_Article07.map( (item, id) => {
                        return <li key = {item.id}
                            className = "Article07_Slider_li"
                        >
                            <a href="#">
                                <div className="Article07_banner">
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

export default Article07