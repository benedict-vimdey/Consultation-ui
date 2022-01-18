import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import GoodServices from './Components/GoodServices';
import Follow from './Components/Follow';
import Footer from './Components/Footer';

function App() {
  return (
    <div className=" w-screen">
     <Navbar/>
     <Hero/>
     <Explore/>
     <GoodServices/>
     <Follow/>
     <Footer/>
    </div>
  );
}

export default App;
