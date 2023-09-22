/* eslint-disable */
import './asset/css/reset.css'
import './asset/css/App.css';
import Main_Page from './Components/Main_Page/Main_Page';
import Common_Contents from './Components/Common_Contents/Common_Contents'
import Sub_Page from './Components/Sub_Page/Sub_Page'
import Header from './Components/Common_Contents/Header/Header';
import Footer from './Components/Common_Contents/Footer/Footer';
import Announcement from './Pages/Announcement/Announcement';

function App() {
  return (
    <div>
      <Header/>
      <Announcement/>
      <Footer/>
    </div>
    <>
      <Sub_Page/>
      <Common_Contents/>
    </>
  );
}

export default App;
