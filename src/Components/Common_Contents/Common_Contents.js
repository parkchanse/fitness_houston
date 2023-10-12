import Announcement from '../../Pages/Announcement/Announcement'
import './Common_Contents.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Common_Contents() {
    return (
        <div className='common'>
            <Header />
            <Announcement />
            <Footer />
        </div>
    )
}

export default Common_Contents