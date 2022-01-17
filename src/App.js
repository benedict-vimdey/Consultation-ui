import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Explore from './Components/Explore';

function App() {
  return (
    <div className=" w-screen">
     <Navbar/>
     <Hero/>
     <Explore/>
    </div>
  );
}

export default App;
