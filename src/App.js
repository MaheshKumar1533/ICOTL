import logo from './logo.svg';
import './App.css';
import {Router} from './router/router'
import Navbar from './components/Navbar/navbar'
import ContactUs from './components/Contact_Us/contactUs';
import Footer from './components/Footer/footer'

function App() {
  window.title = "MITS ICOTL' 2026"
  return (
    <div className="App" >
        <Navbar />
        <Router />
        <ContactUs  />
    </div>
  );
}

export default App;