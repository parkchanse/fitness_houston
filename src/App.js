/* eslint-disable */
import './asset/css/reset.css'
import './asset/css/App.css';
import Main_Page from './Components/Main_Page/Main_Page';
import Common_Contents from './Components/Common_Contents/Common_Contents'
import Sub_Page from './Components/Sub_Page/Sub_Page'
import Header from './Components/Common_Contents/Header/Header';
import Footer from './Components/Common_Contents/Footer/Footer';
import Announcement from './Pages/Announcement/Announcement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/announcement" element={<Announcement />}></Route>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
      <Announcement/>
      <Footer/>
    </div>
    <>
      <Sub_Page/>
    </>
  );
}

export default App;
