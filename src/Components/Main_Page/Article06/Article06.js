/* eslint-disable */

import './Article06.css'
import Data_Article06 from './Data_Article06.js/Data_Article06'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons"


function Article06() {
    return (
        <div className="Article06">
            <h1>
                헬스기구 추천
                <span><FontAwesomeIcon icon={faChevronRight}/></span>
            </h1>
            <div className='Article06_Content'>
                <div className='Article06_Container'>
                    <ul className='Article06_Ul'>
                        {Data_Article06.map((item, id) => {
                            return <li key={item.id}>
                                <a href='#'>
                                    <div className='Article06_box'>
                                        <div className='Article06_img'>
                                            <img src={item.img[`img0${id + 1}`]} alt='이미지'/>
                                            <p>{item.Title}</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        })}
                    </ul>
                    <span ><FontAwesomeIcon icon={faChevronLeft} className='A6_Left'/></span>
                    <span ><FontAwesomeIcon icon={faChevronRight} className='A6_Right'/></span>
                </div>
            </div>
        </div>
    )
}

export default Article06