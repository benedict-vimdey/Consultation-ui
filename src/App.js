import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import GoodServices from './Components/GoodServices';

function App() {
  return (
    <div className=" w-screen">
     <Navbar/>
     <Hero/>
     <Explore/>
     <GoodServices/>
    </div>
  );
}

export default App;
