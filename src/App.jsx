import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Client from './Client/Client';
import Technology from './Technology/Technology';
import About from './About/About';
import Career from './Career/Career';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/service' element={<Services/>}></Route>
          <Route path='/client' element={<Client/>}></Route>
          <Route path='/technology' element={<Technology/>}></Route>
          <Route path='/career' element={<Career/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
