import './App.css';
import Carousal from './component/Carousal/Carousal';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Inputs from './component/Inputs/Input';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slider/>
      <Inputs/>
      <Carousal/>
      <Footer/>
    </div>
  );
}

export default App;
