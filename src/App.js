import logo from './logo.svg';
import './App.css';

import {Router} from './router/router'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
    <Navbar />
      
      <Router />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
