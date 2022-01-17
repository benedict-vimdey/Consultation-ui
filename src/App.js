import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import GoodServices from './Components/GoodServices';
import Follow from './Components/Follow';

function App() {
  return (
    <div className=" w-screen">
     <Navbar/>
     <Hero/>
     <Explore/>
     <GoodServices/>
     <Follow/>
    </div>
  );
}

export default App;
